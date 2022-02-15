(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c}));var r,a,s=n(13);!function(e){e.Testnet="testnet",e.Regtest="regtest",e.Mainnet="mainnet",e.STN="STN"}(r||(r={})),function(e){e[e.ALL=65]="ALL",e[e.SINGLE=67]="SINGLE",e[e.NONE=66]="NONE",e[e.ANYONECANPAY_ALL=193]="ANYONECANPAY_ALL",e[e.ANYONECANPAY_SINGLE=195]="ANYONECANPAY_SINGLE",e[e.ANYONECANPAY_NONE=194]="ANYONECANPAY_NONE"}(a||(a={}));var c=function e(t){Object(s.a)(this,e),this.network=void 0,this.network=t}},174:function(e,t){},178:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r),s=n(4),c=n(13),o=n(17),i=n(3),u=n(11),l=n(20),p=n.n(l),d=n(33),b=function(){function t(){Object(c.a)(this,t)}return Object(o.a)(t,null,[{key:"setWallet",value:function(e){t.wallet=e}},{key:"version",value:function(){return"0.0.1"}},{key:"loadContract",value:function(e){return p.a.get(e,{timeout:1e4}).then((function(e){return{contractClass:Object(i.buildContractClass)(e.data),types:Object(i.buildTypeClasses)(e.data)}}))}},{key:"buildDeployTx",value:function(){var n=Object(s.a)(a.a.mark((function n(r,c){var o,l,p,b;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.wallet,n.next=3,t.wallet.getRawChangeAddress();case 3:return l=n.sent,n.next=6,t.wallet.getPublicKey();case 6:return p=n.sent,b=c+2e3,n.abrupt("return",o.listUnspent(b,{purpose:"alice"}).then(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}throw new Error("no utxos");case 2:if((n={inputs:[],outputs:[]}).outputs.push({script:r.lockingScript.toHex(),satoshis:c}),n.inputs.push({utxo:t[0],script:"",sequence:0}),!((s=t[0].satoshis-c-2e3)<=0)){e.next=8;break}throw new Error("fund is not enough");case 8:return o=i.bsv.Script.buildPublicKeyHashOut(l).toHex(),n.outputs.push({script:o,satoshis:s}),e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(t){var n=t.inputs[0].utxo;return o.getSignature(Object(d.d)(t),0,n.satoshis,n.script,u.b.ALL,l).then((function(n){console.log("getSignature",n,p);var r=(new i.bsv.Script).add(e.from(n,"hex")).add(new i.bsv.PublicKey(p).toBuffer()).toHex();return t.inputs[0].script=r,t}))})));case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"sendRawTx",value:function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.wallet.sendRawTransaction(n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendTx",value:function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.wallet.sendRawTransaction(Object(d.d)(n)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deploy",value:function(){var e=Object(s.a)(a.a.mark((function e(n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.buildDeployTx(n,r).then(function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sendTx(n).then((function(e){return[n,e]})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),t}();b.wallet=void 0}).call(this,n(1).Buffer)},192:function(e,t,n){},194:function(e,t,n){},205:function(e,t){},211:function(e,t){},212:function(e,t){},233:function(e,t){},235:function(e,t){},246:function(e,t){},248:function(e,t){},275:function(e,t){},277:function(e,t){},282:function(e,t){},284:function(e,t){},296:function(e,t){},299:function(e,t){},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(3),a=n(11);function s(e,t,n,a,s){t.inputs[n].output=new r.bsv.Transaction.Output({script:s.script,satoshis:s.satoshis});var c=new r.bsv.Transaction.Signature({publicKey:e.publicKey,prevTxId:s.txHash,outputIndex:s.outputIndex,inputIndex:n,signature:r.bsv.Transaction.Sighash.sign(t,e,a,n,t.inputs[n].output.script,t.inputs[n].output.satoshisBN),sigtype:a});return r.bsv.Script.buildPublicKeyHashIn(c.publicKey,c.signature.toDER(),c.sigtype).toHex()}function c(e){var t=new r.bsv.Transaction;return e.inputs.forEach((function(e){t.addInput(new r.bsv.Transaction.Input({prevTxId:e.utxo.txHash,outputIndex:e.utxo.outputIndex,sequenceNumber:e.sequence,script:e.script?r.bsv.Script.fromHex(e.script):new r.bsv.Script}),r.bsv.Script.fromHex(e.utxo.script),e.utxo.satoshis)})),e.outputs.forEach((function(e){t.addOutput(new r.bsv.Transaction.Output({script:r.bsv.Script.fromHex(e.script),satoshis:e.satoshis}))})),t.nLockTime=e.nLockTime||0,t}function o(e){return c(e).toString()}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.b.ALL,s=c(e);return Object(r.getPreimage)(s,r.bsv.Script.fromHex(e.inputs[t].utxo.script),e.inputs[t].utxo.satoshis,t,n)}},364:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),s=n(187),c=n.n(s),o=(n(192),n(0)),i=n.n(o),u=n(4),l=n(34),p=(n(194),n(13)),d=n(17),b=n(24),f=n(23),h=n(2),v=function(e){var t=e.value?"https://whatsonchain.com/tx/".concat(e.value.tx):"",n=e.value?Object(h.jsx)("div",{className:"squareicon",children:e.value.n}):"";return Object(h.jsxs)("div",{className:"squarewapper",children:[Object(h.jsx)("button",{className:"".concat(e.winnerClass," square"),onClick:e.onClick,children:e.value?Object(h.jsx)("a",{href:t,target:"_blank",title:"Click to see the transaction",children:e.value.label}):e.value}),n]})},w=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"createBoard",value:function(e,t){for(var n=[],r=0,a=0;a<e;a+=1){for(var s=[],c=0;c<t;c+=1)s.push(this.renderSquare(r++));n.push(Object(h.jsx)("div",{className:"board-row",children:s},a))}return n}},{key:"renderSquare",value:function(e){var t=this,n=!this.props.winnerSquares||this.props.winnerSquares[0]!==e&&this.props.winnerSquares[1]!==e&&this.props.winnerSquares[2]!==e?"":"square--green";return Object(h.jsx)(v,{winnerClass:n,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}},e)}},{key:"render",value:function(){return Object(h.jsx)("div",{children:this.createBoard(3,3)})}}]),n}(a.a.Component),x=n(3),g=n(178),m=n(11),y=n(33),j=n(20),O=n.n(j),k=(m.c,"access_token"),_="public_key_bob",P="address_bob",S="public_key_alice",N="address_alice",A="/v1/grandet_dapp/dapp_list_unspent",T="/v1/grandet_dapp/dapp_sign_raw_transaction",I="/v1/grandet_dapp/dapp_get_signature",L="/v1/grandet_dapp/dapp_get_balance",C="/v1/grandet_dapp/dapp_send_raw_transaction",E="/v1/grandet_dapp/dapp_get_raw_change_address",K="/v1/grandet_dapp/dapp_get_public_key",R=function(){return new URLSearchParams(window.location.search).get("player")||"alice"},H=function(){return new URLSearchParams(window.location.search).get("state")||"alice"},B=function(){return localStorage.getItem(k)},q=function(e){if(e)return localStorage["public_key_".concat(e)];var t="alice"===R()?S:_;return localStorage.getItem(t)},D=function(e,t){if(t)localStorage["public_key_".concat(t)]=e;else{var n="alice"===t?S:_;localStorage.setItem(n,e)}},G=function(e){if(e)return localStorage["address_".concat(e)];var t="alice"===R()?N:P;return localStorage.getItem(t)},U=function(e,t){if(t)localStorage["address_".concat(t)]=e;else{var n="alice"===t?N:P;localStorage.setItem(n,e)}},W=O.a.create({timeout:2e4});W.interceptors.request.use((function(e){var t=B();return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){return Promise.reject(e)}));var Y=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||200!==+t.status){e.next=7;break}if(75e3===+t.data.code&&(console.error(t),localStorage.clear(),alert("Re-login"),window.location.href=""),0!==+t.data.code){e.next=6;break}return e.abrupt("return",Promise.resolve(t));case 6:return e.abrupt("return",Promise.reject(t));case 7:if(!(t&&t.status>=400)){e.next=9;break}return e.abrupt("return",Promise.reject(t));case 9:return e.abrupt("return",Promise.resolve(t));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();W.interceptors.response.use(Y,(function(e){return Promise.reject(e)}));var F=W,X=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a.Mainnet;Object(p.a)(this,n),(e=t.call(this,r)).API_PREFIX=void 0,e.API_DOTWALLET=void 0,e.CLIENT_ID="aa7f349975c72e5ba3178e636728f6b2",e.loginUrl=void 0,e.sender=void 0,e.code2token=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,O.a.post("https://common.mempool.com/api/dotwallet/get_access_token",{code:t,redirect_uri:"".concat(window.location.origin,"/tic-tac-toe")});case 5:n=e.sent,r=n.data,(a=r.data.access_token)&&(localStorage[k]=a,s="alice"==H()?"?player=alice":"?player=bob",window.location.href="".concat(window.location.origin,"/tic-tac-toe").concat(s)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error("code2token error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),console.log("new DotWallet"),e.API_PREFIX="https://api.whatsonchain.com/v1/bsv/".concat(r===m.a.Regtest?"test":"main"),e.API_DOTWALLET=r===m.a.Regtest?"http://192.168.1.13:6001":"https://api.ddpurse.com";var a="".concat(e.API_DOTWALLET,"/authorize?client_id=").concat(e.CLIENT_ID,"&redirect_uri=").concat(encodeURIComponent("".concat(window.location.origin,"/tic-tac-toe")),"&response_type=code&scope=").concat(encodeURIComponent("user.info"));return e.loginUrl=a,e.sender=r===m.a.Regtest?{appid:"test_bsv_coin_regular",user_index:0}:{appid:"bsv_coin_regular",user_index:0},e}return Object(d.a)(n,[{key:"requestAccount",value:function(e,t){return window.location.href="".concat(this.loginUrl,"&state=").concat(e),Promise.resolve(!0)}},{key:"getbalance",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.post("".concat(this.API_DOTWALLET).concat(L),{sender:this.sender});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.data.confirm+n.data.unconfirm);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"signRawTransaction",value:function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,a){var s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.post("".concat(this.API_DOTWALLET).concat(T),{sender:this.sender,input_index:n,sig_type:r,rawtx:t,addr:a},{headers:{}});case 2:return s=e.sent,c=s.data,e.abrupt("return",c.data.signed_rawtx);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"getSignature",value:function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,a,s,c){var o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.post("".concat(this.API_DOTWALLET).concat(I),{sender:this.sender,input_index:n,sig_type:s,rawtx:t,addr:c},{headers:{player:"alice"}});case 2:return o=e.sent,u=o.data,e.abrupt("return",u.data.hex_signature);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a,s,c){return e.apply(this,arguments)}}()},{key:"sendRawTransaction",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.post("".concat(this.API_DOTWALLET).concat(C),{sender:this.sender,rawTx:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.data.txid);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"listUnspent",value:function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.post("".concat(this.API_DOTWALLET).concat(A),{sender:this.sender,min_amount:t},{headers:{player:null===n||void 0===n?void 0:n.purpose}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a.data.utxos.filter((function(e){return e.satoshis>=t})).map((function(e){return{txHash:e.tx_hash,outputIndex:e.output_index,satoshis:e.satoshis,script:e.script,addr:e.addr,pubkey:e.pubkey}})));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getRawChangeAddress",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.post("".concat(this.API_DOTWALLET).concat(E),{sender:this.sender},{headers:{player:null===t||void 0===t?void 0:t.purpose}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.data.address);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPublicKey",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.post("".concat(this.API_DOTWALLET).concat(K),{sender:this.sender},{headers:{player:null===t||void 0===t?void 0:t.purpose}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.data.public_key);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(m.c),J=n(73),M=new(function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n),(e=t.call(this)).player="",e.privKey="",e.accessToken="",e.deleteGame=function(){console.log("deleteGame"),window.localStorage.removeItem("game")},e.createGame=function(e){return e.event="createGame",console.log("createGame",e),window.localStorage.setItem("game",JSON.stringify(e))},e.saveGame=function(e,t){e.event=t,console.log("saveGame",e),window.localStorage.setItem("game",JSON.stringify(e))},e.getGame=function(){var e=window.localStorage.getItem("game");if(e&&null!==e)return JSON.parse(e)},e.getCurrentPlayer=function(){return e.player},e.savePrivateKey=function(t){e.privKey=t,window.localStorage.setItem(e.player,t)},e.getPrivateKey=function(){return e.player&&(e.privKey=window.localStorage.getItem(e.player)),e.privKey},e.getBobPrivateKey=function(){return window.localStorage.getItem("bob")},e.getAlicePrivateKey=function(){return window.localStorage.getItem("alice")},e.getAccessToken=function(){return e.player&&(e.accessToken=B()),e.accessToken};var r=new URLSearchParams(window.location.search);e.player=r.get("player")||"alice";var a=Object(J.a)(e);return e.accessToken=B(),window.addEventListener("storage",(function(t){if(console.log("on storage change "+e.player,t),"game"===t.key)try{var n=window.localStorage.getItem("game");if(n&&null!==n){var r=JSON.parse(n);r.event&&a.emit(r.event,r)}}catch(t){console.error(" storage change error",t)}}),!1),e}return Object(d.a)(n,[{key:"addDeployedListener",value:function(e){console.log("addDeployedListener"),this.on("deployed",e)}},{key:"removeDeployedListener",value:function(e){console.log("removeDeployedListener"),this.off("deployed",e)}},{key:"addNextListener",value:function(e){console.log("addNextListener"),this.on("next",e)}},{key:"removeNextListener",value:function(e){console.log("removeNextListener"),this.off("next",e)}}]),n}(n(41).EventEmitter)),z=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n+=1){var r=Object(l.a)(t[n],3),a=r[0],s=r[1],c=r[2];if(e[a]&&e[s]&&e[c]&&e[a].label===e[s].label&&e[a].label===e[c].label)return{winner:e[a],winnerRow:t[n]}}return{winner:null,winnerRow:null}},V={history:[{squares:Array(9).fill(null)}],currentStepNumber:0,is_alice_turn:!0},Q=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(p.a)(this,n),r=t.call(this,e),e.game&&e.game.gameState?r.state=e.game.gameState:r.state=V,r}return Object(d.a)(n,[{key:"componentWillReceiveProps",value:function(e){console.log("componentWillReceiveProps",e),e.game&&e.game.gameState?this.setState(e.game.gameState):this.setState(V)}},{key:"getNewStateScript",value:function(e){return this.props.contractInstance.getNewStateScript({is_alice_turn:!this.state.is_alice_turn,board:new x.Bytes(e.map((function(e){return e&&"X"===e.label?"01":e&&"O"===e.label?"02":"00"})).join(""))})}},{key:"calculateOldState",value:function(e){this.props.contractInstance.is_alice_turn=this.state.is_alice_turn,this.props.contractInstance.board=new x.Bytes(e.map((function(e){return e&&"X"===e.label?"01":e&&"O"===e.label?"02":"00"})).join(""))}},{key:"updateState",value:function(e,t){if(!this.props.game||!this.props.game.lastUtxo)return!1;if(z(t).winner||t[e])return!1;t[e]={label:this.state.is_alice_turn?"X":"O"};var n=M.getCurrentPlayer();return!("alice"!==n||!this.state.is_alice_turn)||("bob"===n&&!this.state.is_alice_turn||(alert("now is ".concat(this.state.is_alice_turn?"Alice":"Bob"," turn ")),console.error("now is ".concat(this.state.is_alice_turn?"Alice":"Bob"," turn , but got ").concat(n)),!1))}},{key:"buildCallContractTx",value:function(){var e=Object(u.a)(i.a.mark((function e(t,n,r){var a,s,c,o,u,l,p,d,b,f,h,v,w,j,O,k,_;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=z(n).winner,s=3e3,c=[],o=this.props.game.lastUtxo.satoshis-s,!a){e.next=12;break}return u=R(),e.next=8,G(u);case 8:l=e.sent,c.push({satoshis:o,script:x.bsv.Script.buildPublicKeyHashOut(l).toHex()}),e.next=13;break;case 12:r.length>=9?(p=new x.bsv.PublicKey(this.props.game.alicePubKey,{network:x.bsv.Networks.testnet}),d=new x.bsv.PublicKey(this.props.game.bobPubKey,{network:x.bsv.Networks.testnet}),b=x.bsv.Script.buildPublicKeyHashOut(p.toAddress(x.bsv.Networks.testnet)).toHex(),f=x.bsv.Script.buildPublicKeyHashOut(d.toAddress(x.bsv.Networks.testnet)).toHex(),o=(this.props.game.lastUtxo.satoshis-s)/2,c.push({satoshis:o,script:b}),c.push({satoshis:o,script:f})):(h=this.getNewStateScript(n),c.push({satoshis:o,script:h.toHex()}));case 13:if(!(c[0].satoshis<=0)){e.next=16;break}return alert("fund in contract is too low "),e.abrupt("return",void 0);case 16:return v={inputs:[{utxo:this.props.game.lastUtxo,sequence:0,script:""}],outputs:c},w=Object(y.a)(v),j=G(),e.next=21,g.a.wallet.getSignature(Object(y.d)(v),0,v.inputs[0].utxo.satoshis,v.inputs[0].utxo.script,m.b.ALL,j);case 21:if(O=e.sent,k=this.props.contractInstance.move(t,new x.Sig(Object(x.toHex)(O)),o,w).toHex(),v.inputs[0].script=k,(_=this.props.contractInstance.move(t,new x.Sig(Object(x.toHex)(O)),o,w).verify({inputSatoshis:this.props.game.lastUtxo.satoshis,tx:Object(y.c)(v)})).success){e.next=27;break}throw new Error(_.error);case 27:return e.abrupt("return",v);case 28:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a,s,c=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state.history.slice(0,this.state.currentStepNumber+1),r=n[n.length-1],a=r.squares.slice(),this.calculateOldState(a),this.updateState(t,a)){e.next=7;break}return console.error("handleClick checkIfValid false..."),e.abrupt("return");case 7:return e.next=9,this.buildCallContractTx(t,a,n);case 9:if(s=e.sent){e.next=13;break}return console.error("buildCallContractTx fail..."),e.abrupt("return");case 13:g.a.sendTx(s).then((function(e){a[t].tx=e,a[t].n=n.length;var r,o={history:n.concat([{squares:a,currentLocation:(r=t,{0:"row: 1, col: 1",1:"row: 1, col: 2",2:"row: 1, col: 3",3:"row: 2, col: 1",4:"row: 2, col: 2",5:"row: 2, col: 3",6:"row: 3, col: 1",7:"row: 3, col: 2",8:"row: 3, col: 3"}[r]),stepNumber:n.length}]),is_alice_turn:!c.state.is_alice_turn,currentStepNumber:n.length};M.saveGame(Object.assign({},c.props.game,{gameState:o,lastUtxo:{txHash:e,outputIndex:0,satoshis:s.outputs[0].satoshis,script:s.outputs[0].script}}),"next"),c.setState(o)})).catch((function(e){e.response&&alert("sendTx errror: "+e.response.data),console.error("sendTx errror",e.response)}));case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,n,r,a=this,s=this.state.history,c=s[this.state.currentStepNumber],o=z(c.squares),i=o.winner,u=o.winnerRow,l=M.getGame();n="bob"===M.getCurrentPlayer()?Object(h.jsxs)("div",{className:"bob",children:["Bob",Object(h.jsx)("img",{src:"/tic-tac-toe/bob.png"})]}):Object(h.jsxs)("div",{className:"alice",children:["Alice",Object(h.jsx)("img",{src:"/tic-tac-toe/alice.jpg"})]}),l&&l.deploy&&(r=Object(h.jsxs)("div",{className:"bet",children:[Object(h.jsx)("a",{href:"https://whatsonchain.com/tx/".concat(l.deploy),target:"_blank",children:"Bet transaction"})," "]}));M.getCurrentPlayer();if(i){var p="X"===i.label?"Alice":"Bob";e="Winner is ".concat(p),l&&l.lastUtxo&&(t=Object(h.jsxs)("div",{className:"end",children:[Object(h.jsx)("a",{href:"https://whatsonchain.com/tx/".concat(l.lastUtxo.txHash),target:"_blank",children:"Withdraw transaction"})," "]}))}else if(10===s.length)e="Draw. No one won.",l&&l.lastUtxo&&(t=Object(h.jsxs)("div",{className:"end",children:[Object(h.jsx)("a",{href:"https://whatsonchain.com/tx/".concat(l.lastUtxo.txHash),target:"_blank",children:"Withdraw transaction"})," "]}));else{var d=this.state.is_alice_turn?"Alice":"Bob";e="Next player: ".concat(d)}return Object(h.jsx)("div",{className:"game",children:Object(h.jsxs)("div",{className:"game-board",children:[Object(h.jsxs)("div",{className:"game-title",children:[n,Object(h.jsxs)("div",{className:"game-status",children:[" ",e," "]})]}),Object(h.jsx)(w,{squares:c.squares,winnerSquares:u,onClick:function(e){return a.handleClick(e)}}),Object(h.jsxs)("div",{className:"game-bottom",children:[r,t]})]})})}}]),n}(a.a.Component);var Z=function(e){a.a.useReducer((function(e){return!e}))[1];var t=Object(r.useRef)(null),n=function(t){e.cancelBet()};if(e.started)return Object(h.jsxs)("div",{children:["The game is in progress ...",Object(h.jsx)("button",{className:"pure-button cancel",onClick:n,children:"Restart"})]});if(e.game&&e.game.creator===M.getCurrentPlayer()){var s="alice"===M.getCurrentPlayer()?"bob":"alice",c=window.location.href.split("?")[0];return Object(h.jsxs)("div",{children:["Waiting someone join the game ...",Object(h.jsx)("a",{className:"pure-button",href:c+"?player="+s,target:"_blank",children:" Join"}),Object(h.jsx)("button",{className:"pure-button cancel",onClick:n,children:"Restart"})]})}return e.game&&e.game.creator!==M.getCurrentPlayer()?Object(h.jsx)("div",{children:"Joining the game..."}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{children:["Bet amount:",Object(h.jsx)("input",{ref:t,type:"number",name:"amount",placeholder:"in satoshis"})]}),Object(h.jsx)("button",{className:"start",onClick:function(n){if(g.a.wallet){var r=parseInt(t.current.value);r<2e4?alert("The bet fund is too small to play, at least 20000"):isNaN(r)?console.error("".concat(t.current.value," is not number")):e.startBet(r)}else alert("Pelease create wallet first")},children:"Start Bet"})]})},$=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a.Mainnet;return Object(p.a)(this,n),(e=t.call(this,r)).API_PREFIX=void 0,e.sensilet=void 0,e.API_PREFIX="https://api.whatsonchain.com/v1/bsv/".concat(r==m.a.Testnet?"test":"main"),"undefined"!==typeof window.sensilet?(console.log("Sensilet is installed!"),e.sensilet=window.sensilet):console.warn("sensilet is not installed"),e}return Object(d.a)(n,[{key:"requestAccount",value:function(e,t){if(!this.sensilet){if("undefined"!==typeof window.sensilet)return console.log("Sensilet is installed!"),this.sensilet=window.sensilet,this.sensilet.requestAccount();alert("sensilet is not installed"),window.open("https://sensilet.com/","_blank")}return this.sensilet.requestAccount()}},{key:"isConnect",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log("isConnect"),"undefined"===typeof this.sensilet){e.next=8;break}return e.next=5,this.sensilet.isConnect();case 5:return t=e.sent,console.log("connect state",t),e.abrupt("return",t);case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:return e.abrupt("return",Promise.resolve(!1));case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getbalance",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.sensilet.getBsvBalance();case 3:return t=e.sent,console.log(n.DEBUG_TAG,"getbalance",t.balance),e.abrupt("return",Promise.resolve(t.balance.total));case 8:e.prev=8,e.t0=e.catch(0),console.error("getbalance error",e.t0);case 11:return e.abrupt("return",Promise.resolve(0));case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"signRawTransaction",value:function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,a){var s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("signRawTransaction",t),s=new x.bsv.Transaction(t),e.next=4,this.sensilet.signTx({list:[{txHex:t,address:a,inputIndex:n,satoshis:s.inputs[n].satoshis}]});case 4:return c=e.sent,console.log(c),e.abrupt("return",Promise.resolve(c.sigList[0].sig));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"getSignature",value:function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,a,s,c){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sensilet.signTx({list:[{txHex:t,address:c,inputIndex:n,satoshis:r,scriptHex:a,sigtype:s}]});case 2:return o=e.sent,e.abrupt("return",o.sigList[0].sig);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a,s,c){return e.apply(this,arguments)}}()},{key:"sendRawTransaction",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.max(1,t.length/2/1024),r=Math.max(1e4,1e3*n),e.prev=2,e.next=5,O.a.post("".concat(this.API_PREFIX,"/tx/raw"),{txhex:t},{timeout:r});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(2),new Error("sendRawTransaction error: ");case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"listUnspent",value:function(){var e=Object(u.a)(i.a.mark((function e(t,r){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sensilet.getAddress();case 2:return a=e.sent,console.log(n.DEBUG_TAG,"listUnspent",a),e.abrupt("return",O.a.get("".concat(this.API_PREFIX,"/address/").concat(a,"/unspent"),{timeout:1e4}).then((function(e){return e.data.filter((function(e){return e.value>=t})).map((function(e){return{txHash:e.tx_hash,outputIndex:e.tx_pos,satoshis:e.value,script:x.bsv.Script.buildPublicKeyHashOut(a).toHex()}}))})));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getRawChangeAddress",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.sensilet.getAddress());case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPublicKey",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.sensilet.getPublicKey());case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"exitAccount",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.sensilet.exitAccount();case 3:return e.abrupt("return",!0);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()}]),n}(m.c);$.DEBUG_TAG="Sensilet";var ee=function(e){var t=Object(r.useState)(0),n=Object(l.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(!1),o=Object(l.a)(c,2),p=o[0],d=o[1];Object(r.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("code");e&&(new X).code2token(e)}),[]),Object(r.useEffect)(Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=setTimeout(Object(u.a)(i.a.mark((function t(){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(g.a.wallet){t.next=13;break}if(!M.getAccessToken()){t.next=8;break}n=new X,g.a.setWallet(n),e.startGame(),d(!0),t.next=13;break;case 8:return r=new $,t.next=11,r.isConnect();case 11:t.sent&&(g.a.setWallet(r),console.log("..... setAuth"),e.startGame(),d(!0));case 13:g.a.wallet&&g.a.wallet.getbalance().then((function(e){s(e)}));case 14:case"end":return t.stop()}}),t)}))),1e3),t.abrupt("return",(function(){return clearTimeout(n)}));case 2:case"end":return t.stop()}}),t)}))),[]);var b=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new $,e.next=4,n.requestAccount(R());case 4:e.sent&&window.location.reload(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("requestAccount error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.clear(),n=new $,e.next=4,n.isConnect();case 4:if(!e.sent){e.next=8;break}return e.next=8,n.exitAccount();case 8:g.a.setWallet(void 0),d(!1),window.location.reload();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return p?Object(h.jsx)("div",{className:"wallet",children:Object(h.jsxs)("div",{className:"walletInfo",children:[Object(h.jsx)("div",{className:"balance",children:Object(h.jsxs)("label",{children:["Balance: ",a]})}),Object(h.jsx)("button",{className:"pure-button button-large",onClick:f,children:"Logout"})]})}):Object(h.jsx)("div",{className:"wallet",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"pure-button button-large sensilet",onClick:b,children:"Sensilet"}),Object(h.jsx)("button",{className:"pure-button button-large dotwallet",onClick:function(e){(new X).requestAccount(R())},children:"Dotwallet"})]})})};var te=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(null),o=Object(l.a)(c,2),p=o[0],d=o[1],b=a.a.useReducer((function(e){return!e}))[1],f=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("startBet with amount",t),!g.a.wallet){e.next=13;break}return e.next=4,g.a.wallet.getbalance();case 4:if(n=e.sent,!(t>n)){e.next=8;break}return alert("Please fund your wallet address first"),e.abrupt("return");case 8:r=M.getCurrentPlayer(),a={amount:t,tx:{inputs:[],outputs:[]},name:"tic-tac-toe",alicePubKey:"",bobPubKey:"",creator:r,player:"",date:new Date},"alice"===r?Object.assign(a,{alicePubKey:q("alice")}):Object.assign(a,{bobPubKey:q("bob")}),M.createGame(a),b();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("onDeployed..."),t&&t.alicePubKey&&t.bobPubKey&&m(t.alicePubKey,t.bobPubKey),s(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("onNext",t),b();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function m(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(i.a.mark((function e(t,n){var r,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==p||!t||!n){e.next=9;break}return e.next=3,g.a.loadContract("/tic-tac-toe/tictactoe_release_desc.json");case 3:return r=e.sent,a=r.contractClass,s=new a(new x.PubKey(Object(x.toHex)(t)),new x.PubKey(Object(x.toHex)(n)),!0,new x.Bytes("000000000000000000")),d(s),console.log("fetchContract successfully"),e.abrupt("return",s);case 9:return e.abrupt("return",p);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){console.log("setPlayersPublicKey ...");var e=g.a.wallet;return e instanceof $?e.getPublicKey().then(function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=x.bsv.PublicKey.fromHex(t),D(t,"alice"),U(n.toAddress(),"alice"),D(t,"bob"),U(n.toAddress(),"bob");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):e instanceof X?e.listUnspent(2e4,{purpose:"alice"}).then(function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}throw new Error("no utxos");case 2:n=x.bsv.PublicKey.fromHex(t[0].pubkey),D(t[0].pubkey,"alice"),U(n.toAddress(),"alice"),D(t[0].pubkey,"bob"),U(n.toAddress(),"bob");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):void 0}function O(e){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("joinGame...",t),e.next=3,g.a.wallet.getbalance();case 3:if(!(e.sent<=t.amount)){e.next=7;break}return alert("no available utxos or  balance is not enough, please fund your wallet"),e.abrupt("return");case 7:return Object.assign(t,{alicePubKey:q("alice"),player:"alice"}),Object.assign(t,{bobPubKey:q("bob"),player:"bob"}),e.next=11,m(t.alicePubKey,t.bobPubKey);case 11:null!=(n=e.sent)&&g.a.deploy(n,t.amount).then((function(e){var n=Object(l.a)(e,2),r=n[0],a=n[1];t.lastUtxo={txHash:a,outputIndex:0,satoshis:r.outputs[0].satoshis,script:r.outputs[0].script},t.tx=r,t.deploy=a,M.saveGame(t,"deployed"),s(!0)})).catch((function(e){"no utxos"===e.message&&alert("no available utxos, please fund your wallet"),console.error("deploy error",e)}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return console.log("already started"),e.abrupt("return");case 3:return console.log("startGame..."),e.next=6,j();case 6:(t=M.getGame())&&t.lastUtxo&&s(!0),t&&t.alicePubKey&&t.bobPubKey&&m(t.alicePubKey,t.bobPubKey),t&&!t.deploy&&O(t);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){return M.addDeployedListener(v),M.addNextListener(w),function(){M.removeDeployedListener(v),M.removeNextListener(w)}}),[p]);var P=M.getGame();return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h2",{children:"Play Tic-Tac-Toe on Bitcoin"}),Object(h.jsx)(Z,{startBet:f,cancelBet:function(){M.deleteGame(),s(!1),b()},started:n,game:P}),Object(h.jsx)(Q,{game:P,contractInstance:p}),Object(h.jsx)(ee,{startGame:function(){return _.apply(this,arguments)}})]})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(te,{})}),document.getElementById("root")),ne()},97:function(e,t){}},[[364,1,2]]]);
//# sourceMappingURL=main.baada51c.chunk.js.map