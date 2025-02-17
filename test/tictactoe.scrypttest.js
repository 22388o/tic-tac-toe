const { expect } = require('chai');
const { buildContractClass, compileContract, signTx, bsv, Sig, PubKey, toHex, getPreimage } = require('scryptlib');
const path = require('path');
const { existsSync, mkdirSync } = require('fs');
const inputIndex = 0
const inputSatoshis = 100000

function newTx() {
  const utxo = {
    txId: 'a477af6b2667c29670467e4e0728b685ee07b240235771862318e29ddbe58458',
    outputIndex: 0,
    script: '',   // placeholder
    satoshis: inputSatoshis
  };
  return new bsv.Transaction().from(utxo);
}

function runCompile(fileName) {
  const filePath = path.join(__dirname, '..', 'contracts', fileName)
  const out = path.join(__dirname, '..', 'out')

  if (!existsSync(out)) {
    mkdirSync(out);
  }

  const result = compileContract(filePath, {
    out: out
  });
  if (result.errors.length > 0) {
    console.log(`Compile contract ${filePath} fail: `, result.errors)
    throw result.errors;
  }

  return result;
}

const privateKeyAlice = new bsv.PrivateKey.fromRandom('testnet')
const publicKeyAlice = bsv.PublicKey.fromPrivateKey(privateKeyAlice)

const privateKeyBob = new bsv.PrivateKey.fromRandom('testnet')
const publicKeyBob = bsv.PublicKey.fromPrivateKey(privateKeyBob)

const Tictactoe = buildContractClass(runCompile('tictactoe.scrypt'));

let game = new Tictactoe(new PubKey(toHex(publicKeyAlice)), new PubKey(toHex(publicKeyBob)), true, [0,0,0,0,0,0,0,0,0]);



describe('Test sCrypt contract Tictactoe In Javascript', () => {
  let result, preimage, sig

  function reset() {
    game.board = [0,0,0,0,0,0,0,0,0];
    game.isAliceTurn = true;
  }

  function moveScript(isAliceTurn, board) {
    return {
      outputScript: game.getNewStateScript({
        isAliceTurn: isAliceTurn,
        board: board
      }),
      isAliceTurn: isAliceTurn,
      board: board
    }
    
  }

  function testMove(isAliceTurn, n, newStates, expected) {
    const privateKey = isAliceTurn ? privateKeyAlice : privateKeyBob;


    const tx = newTx();

    tx.addOutput(new bsv.Transaction.Output({
      script: newStates.outputScript,
      satoshis: 10000
    }))


    preimage = getPreimage(tx, game.lockingScript, inputSatoshis);

    sig = signTx(tx, privateKey, game.lockingScript, inputSatoshis)

    const context = { tx, inputIndex, inputSatoshis }

    result = game.move(n, new Sig(toHex(sig)), 10000, preimage).verify(context)

    if (expected === false) {
      expect(result.success, result.error).to.be.false;
    } else {
      expect(result.success, result.error).to.be.true;
      game.isAliceTurn = newStates.isAliceTurn;
      game.board = newStates.board;
    }

  }

  function testMoveWin(isAliceTurn, n, outputScript) {
    const privateKey = isAliceTurn ? privateKeyAlice : privateKeyBob;


    const tx = newTx();

    tx.addOutput(new bsv.Transaction.Output({
      script: outputScript,
      satoshis: 10000
    }))


    preimage = getPreimage(tx, game.lockingScript, inputSatoshis);

    sig = signTx(tx, privateKey, game.lockingScript, inputSatoshis)

    const context = { tx, inputIndex, inputSatoshis }

    result = game.move(n, new Sig(toHex(sig)), 10000, preimage).verify(context)

    expect(result.success, result.error).to.be.true;
  }

  function testMoveNobodyWin(isAliceTurn, n, outputScript0, outputScript1) {
    const privateKey = isAliceTurn ? privateKeyAlice : privateKeyBob;

    const tx = newTx();

    tx.addOutput(new bsv.Transaction.Output({
      script: outputScript0,
      satoshis: 10000
    }))

    tx.addOutput(new bsv.Transaction.Output({
      script: outputScript1,
      satoshis: 10000
    }))


    preimage = getPreimage(tx, game.lockingScript, inputSatoshis);

    sig = signTx(tx, privateKey, game.lockingScript, inputSatoshis)

    const context = { tx, inputIndex, inputSatoshis }

    result = game.move(n, new Sig(toHex(sig)), 10000, preimage).verify(context)
    expect(result.success, result.error).to.be.true;
  }

  it('One full round where Alice wins', () => {


    // Alice places an X at 0-th cell
    testMove(true, 0, moveScript(false, [1,0,0,0,0,0,0,0,0]))

    // Bob places an O at 4-th cell
    testMove(false, 4, moveScript(true, [1,0,0,0,2,0,0,0,0]))


    // Alice places an X at 1-th cell
    testMove(true, 1, moveScript(false, [1,1,0,0,2,0,0,0,0]))

    // Bob places an O at 8-th cell
    testMove(false, 8, moveScript(true, [1,1,0,0,2,0,0,0,2]))

    // Alice places an X at 2-th cell and wins
    testMoveWin(true, 2, bsv.Script.buildPublicKeyHashOut(privateKeyAlice.toAddress()));
  });


  it('One full round where nobody wins', () => {

    reset();
    // Alice places an X at 0-th cell
    testMove(true, 0, moveScript(false, [1,0,0,0,0,0,0,0,0]))

    // Bob places an O at 2-th cell
    testMove(false, 2, moveScript(true, [1,0,2,0,0,0,0,0,0]))

    // Alice places an X at 1-th cell
    testMove(true, 1, moveScript(false, [1,1,2,0,0,0,0,0,0]))

    // // Bob places an O at 3-th cell
    testMove(false, 3, moveScript(true, [1,1,2,2,0,0,0,0,0]))


    // // Alice places an X at 5-th cell
    testMove(true, 5, moveScript(false, [1,1,2,2,0,1,0,0,0]))

    // // Bob places an O at 4-th cell
    testMove(false, 4, moveScript(true, [1,1,2,2,2,1,0,0,0]))


    // // Alice places an X at 6-th cell
    testMove(true, 6, moveScript(false, [1,1,2,2,2,1,1,0,0]))


    // // Bob places an O at 8-th cell
    testMove(false, 8, moveScript(true, [1,1,2,2,2,1,1,0,2]))


    // // Alice places an X at 7-th cell and nobody wins
    testMoveNobodyWin(true, 7, bsv.Script.buildPublicKeyHashOut(privateKeyAlice.toAddress()), bsv.Script.buildPublicKeyHashOut(privateKeyBob.toAddress()));
  });


  it('should fail if it\'s not alice turn', () => {
    // Alice places an X at 0-th cell
    reset();
    testMove(true, 0, moveScript(false, [1,0,0,0,0,0,0,0,0]))

    // Alice places an X at 1-th cell
    testMove(true, 1, moveScript(true, [1,1,0,0,0,0,0,0,0]), false)
  })

  it('should fail if it exceeds the board', () => {
    reset();
    // Alice places an X at 0-th cell
    testMove(true, 0, moveScript(false, [1,0,0,0,0,0,0,0,0]))

    // Bob places an O exceeds the board
    testMove(true, 11, moveScript(true, [1,0,0,0,0,0,0,0,0]), false)
  })


});
