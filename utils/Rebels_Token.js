/*
主要获取 isvObfuscator token值

获取签名，自定义使用方法如下

  - 请求 API 获取

    export JD_SIGN_API="" # 接口地址，例：http://127.0.0.1:3000/api/getSign，默认 'http://api.nolanstore.cc/sign'
    export JD_SIGN_API_BODY_FIELD="" # body参数字段名，默认 'body'
    export JD_SIGN_API_FUNCTIONID_FIELD="" # functionId参数字段名，默认 'fn'
    export JD_SIGN_API_METHOD="" # 请求方法，默认 'POST'，自定义仅支持 'GET'
    export JD_SIGN_API_CONTENT_TYPE="" # 请求头 'Content-Type'，默认 'application/json; charset=utf-8'，支持 'application/x-www-form-urlencoded' 格式
    JSON响应格式解析的字段目前仅支持 `body` `convertUrl` `convertUrlNew`

  - 本地自定义脚本生成

    如果存在本地签名生成脚本则会优先加载本地签名，具体规范如下：
    - 1. 需要将脚本命名为 Rebels_Sign.js 并存储在与 Rebels_Token 脚本同一目录下
    - 2. 调用函数名为 genSign 并且需要 export 导出
    - 3. 函数固定两个传参，分别是 functionId（函数id） 和 bodyParams（body参数对象）
    - 4. 函数需要返回含有 body、st、sign、sv 等关键字段的url参数形式的签名字符串

  不管通过何种途径获取签名，最终需要的签名形式为url参数格式且至少包含 `body` `st` `sv` `sign` 字段



new Env('Rebels_Token');
*/

var iｉl='jsjiami.com.v7';const l1iII1=iii1II;(function(IlIlii,i1l1i1,liil11,iiillI,l1l111,l1iIII,llI1I1){return IlIlii=IlIlii>>0x5,l1iIII='hs',llI1I1='hs',function(IlIlil,lIli1I,II1il,lllI11,I1lIll){const IlIliI=iii1II;lllI11='tfi',l1iIII=lllI11+l1iIII,I1lIll='up',llI1I1+=I1lIll,l1iIII=II1il(l1iIII),llI1I1=II1il(llI1I1),II1il=0x0;const I1lIli=IlIlil();while(!![]&&--iiillI+lIli1I){try{lllI11=parseInt(IlIliI(0x101,'BGGr'))/0x1*(parseInt(IlIliI(0x194,'bx^6'))/0x2)+parseInt(IlIliI(0x15e,'!y$5'))/0x3*(-parseInt(IlIliI(0xfc,'!y$5'))/0x4)+parseInt(IlIliI(0x102,'CYO3'))/0x5*(-parseInt(IlIliI(0xf8,'fPGH'))/0x6)+-parseInt(IlIliI(0xfd,'TG%E'))/0x7+-parseInt(IlIliI(0xf1,'Rqz%'))/0x8*(-parseInt(IlIliI(0x17f,'bH2m'))/0x9)+parseInt(IlIliI(0x176,'!y$5'))/0xa+parseInt(IlIliI(0x10f,'[daq'))/0xb;}catch(II1ii){lllI11=II1il;}finally{I1lIll=I1lIli[l1iIII]();if(IlIlii<=iiillI)II1il?l1l111?lllI11=I1lIll:l1l111=I1lIll:II1il=I1lIll;else{if(II1il==l1l111['replace'](/[UArQkJNxeDTbPWByCOwRFg=]/g,'')){if(lllI11===lIli1I){I1lIli['un'+l1iIII](I1lIll);break;}I1lIli[llI1I1](I1lIll);}}}}}(liil11,i1l1i1,function(IIIIII,lillII,ii1ilI,lI1ll1,iIiI1,liil1I,i11ii1){return lillII='\x73\x70\x6c\x69\x74',IIIIII=arguments[0x0],IIIIII=IIIIII[lillII](''),ii1ilI=`\x72\x65\x76\x65\x72\x73\x65`,IIIIII=IIIIII[ii1ilI]('\x76'),lI1ll1=`\x6a\x6f\x69\x6e`,(0x173327,IIIIII[lI1ll1](''));});}(0x1840,0x2b85b,Iii11l,0xc4),Iii11l)&&(iｉl=Iii11l);const path=require(l1iII1(0x13a,'k0Y)')),common=require(l1iII1(0x10e,'bH2m'));let scriptName=null,expireMinutes=0x1d;try{let tmpMinutes=parseInt(process[l1iII1(0x151,'ldU&')]['JD_ISV_TOKEN_CACHE_EXPIRE_MINUTES']||'29');expireMinutes=tmpMinutes;}catch{}const defaultCacheTTL=expireMinutes*0x3c*0x3e8,TokenCache=new common[(l1iII1(0x126,'^lT0'))](process['env'][l1iII1(0x109,'7zK2')]||__dirname+l1iII1(0x12a,'uJmV'),defaultCacheTTL,0x2bf20),lzkjPinFilter=(process['env'][l1iII1(0x11e,'LOZ!')]||'')['split']('@'),lzkjPinFilter_interactsaas_and_interaction_v1=(process[l1iII1(0x108,'k0Y)')][l1iII1(0x174,'BbD0')]||process[l1iII1(0x16b,'V3&D')]['JD_ISV_TOKEN_LZKJ_NEW_PIN_FILTER']||process[l1iII1(0x16a,'FIU3')][l1iII1(0x19a,'k0Y)')]||'')['split']('@'),lzkjPinFilter_interaction_v2=(process[l1iII1(0x158,'Cwk&')][l1iII1(0x184,'bx^6')]||'')[l1iII1(0x19e,'fPGH')]('@'),cjhyPinFilter=(process[l1iII1(0xf5,'Jjrj')][l1iII1(0x13d,'LOZ!')]||'')[l1iII1(0x144,'^X7)')]('@');let requestAxiosProxyConfig,requestDynamicProxyConfig;try{const proxyAddress=process[l1iII1(0x18a,'mrR)')][l1iII1(0xec,'Q)0d')]||process[l1iII1(0xf5,'Jjrj')][l1iII1(0x156,'7zK2')]||'';if(proxyAddress){const proxyConfig=common[l1iII1(0x157,'AnW3')](proxyAddress);proxyConfig?(requestAxiosProxyConfig=proxyConfig,console[l1iII1(0x120,'[daq')]('\x0a===============启用\x20getToken\x20代理池代理(新)==============\x0a')):console['log'](l1iII1(0x105,'kT6g'));}else{const proxyApi=process[l1iII1(0x1ab,'CQtq')][l1iII1(0x1aa,'bx^6')]||process[l1iII1(0x177,'BmX]')]['JD_ISV_TOKEN_PROXY_API']||'';if(proxyApi){requestDynamicProxyConfig={'api':null,'proxyConfig':null,'useLimit':null,'timeLimit':null,'fetchFailContinue':null,'extractTimestamp':null,'lastUseTimeStamp':null,'usedTimes':null},requestDynamicProxyConfig[l1iII1(0x181,'k0Y)')]=proxyApi;const useLimit=process[l1iII1(0x1a6,'^lT0')][l1iII1(0x117,'p(dw')]||process['env'][l1iII1(0x148,'#F(N')]||'0';try{requestDynamicProxyConfig[l1iII1(0xf9,'37m9')]=parseInt(useLimit);}catch{requestDynamicProxyConfig[l1iII1(0xee,'7zK2')]=0x1;}const timeLimit=process[l1iII1(0x1ab,'CQtq')][l1iII1(0x167,'bx^6')]||'10000';try{requestDynamicProxyConfig[l1iII1(0x170,'AnW3')]=parseInt(timeLimit);}catch{requestDynamicProxyConfig[l1iII1(0x1b6,'#GVO')]=0x2710;}requestDynamicProxyConfig['fetchFailContinue']=(process[l1iII1(0x169,'wBud')]['RS_ISV_TOKEN_PROXY_FETCH_FAIL_CONTINUE']||l1iII1(0x1a0,'^X7)'))===l1iII1(0xf4,'fPGH'),console[l1iII1(0x18b,'tNqN')](l1iII1(0x197,'BmX]'));}}const globalProxy=process['env'][l1iII1(0x13f,'55Pn')]===l1iII1(0x153,'7zK2');if(globalProxy)try{require(l1iII1(0x131,'[daq')),console[l1iII1(0x161,'^X7)')]('\x0a===============启用\x20getToken\x20代理池代理(旧)==============\x0a');}catch(lI1li1){console[l1iII1(0x198,'uJmV')](l1iII1(0xfb,'K2R0')+lI1li1[l1iII1(0x15f,'bxue')]);}}catch{}const redisUrl=process['env']['JD_ISV_TOKEN_REDIS_CACHE_URL']||'',redisKey=process[l1iII1(0x13b,'Q)0d')][l1iII1(0x1b3,'tNqN')]||'',redisSubmit=!(process[l1iII1(0xed,'[daq')][l1iII1(0x1a4,'t6ek')]===l1iII1(0x18e,'t6ek')),hasRedisKey=/<pt_pin>/[l1iII1(0x18c,'v1Z@')](redisKey);function iii1II(_0x293509,_0x28ff12){const _0x1637da=Iii11l();return iii1II=function(_0x211df2,_0xa8e03e){_0x211df2=_0x211df2-0xe5;let _0x4a03bc=_0x1637da[_0x211df2];if(iii1II['rFASoo']===undefined){var _0x511eb8=function(_0x597759){const _0x2e1643='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x557819='',_0x2a12b3='';for(let _0x60cb0=0x0,_0x1543ab,_0x1f0b9a,_0x193ab4=0x0;_0x1f0b9a=_0x597759['charAt'](_0x193ab4++);~_0x1f0b9a&&(_0x1543ab=_0x60cb0%0x4?_0x1543ab*0x40+_0x1f0b9a:_0x1f0b9a,_0x60cb0++%0x4)?_0x557819+=String['fromCharCode'](0xff&_0x1543ab>>(-0x2*_0x60cb0&0x6)):0x0){_0x1f0b9a=_0x2e1643['indexOf'](_0x1f0b9a);}for(let _0xce85bc=0x0,_0x2c4b82=_0x557819['length'];_0xce85bc<_0x2c4b82;_0xce85bc++){_0x2a12b3+='%'+('00'+_0x557819['charCodeAt'](_0xce85bc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2a12b3);};const _0x17daba=function(_0x54c326,_0x183b5a){let _0x2e1c7=[],_0x27ac8a=0x0,_0x1c1571,_0x2fd443='';_0x54c326=_0x511eb8(_0x54c326);let _0x8ad8aa;for(_0x8ad8aa=0x0;_0x8ad8aa<0x100;_0x8ad8aa++){_0x2e1c7[_0x8ad8aa]=_0x8ad8aa;}for(_0x8ad8aa=0x0;_0x8ad8aa<0x100;_0x8ad8aa++){_0x27ac8a=(_0x27ac8a+_0x2e1c7[_0x8ad8aa]+_0x183b5a['charCodeAt'](_0x8ad8aa%_0x183b5a['length']))%0x100,_0x1c1571=_0x2e1c7[_0x8ad8aa],_0x2e1c7[_0x8ad8aa]=_0x2e1c7[_0x27ac8a],_0x2e1c7[_0x27ac8a]=_0x1c1571;}_0x8ad8aa=0x0,_0x27ac8a=0x0;for(let _0x5f071a=0x0;_0x5f071a<_0x54c326['length'];_0x5f071a++){_0x8ad8aa=(_0x8ad8aa+0x1)%0x100,_0x27ac8a=(_0x27ac8a+_0x2e1c7[_0x8ad8aa])%0x100,_0x1c1571=_0x2e1c7[_0x8ad8aa],_0x2e1c7[_0x8ad8aa]=_0x2e1c7[_0x27ac8a],_0x2e1c7[_0x27ac8a]=_0x1c1571,_0x2fd443+=String['fromCharCode'](_0x54c326['charCodeAt'](_0x5f071a)^_0x2e1c7[(_0x2e1c7[_0x8ad8aa]+_0x2e1c7[_0x27ac8a])%0x100]);}return _0x2fd443;};iii1II['Quznam']=_0x17daba,_0x293509=arguments,iii1II['rFASoo']=!![];}const _0x289248=_0x1637da[0x0],_0x49609e=_0x211df2+_0x289248,_0x213bf5=_0x293509[_0x49609e];return!_0x213bf5?(iii1II['FPIVrU']===undefined&&(iii1II['FPIVrU']=!![]),_0x4a03bc=iii1II['Quznam'](_0x4a03bc,_0xa8e03e),_0x293509[_0x49609e]=_0x4a03bc):_0x4a03bc=_0x213bf5,_0x4a03bc;},iii1II(_0x293509,_0x28ff12);}let redisClient=null;function Iii11l(){const ii1ill=(function(){return[...[iｉl,'WwjksAjPiQUaJCCmBAig.cyRoDOmxFe.rvT7eNAb==','WQ1zCSohWPa','WPxcSGmqw3KtW5RdSCkbW7JdQwDuWRNdNCoYp8oWFqVcNmkSWRmAamkTWQu','WPDuj8k7Bq','WO8ocs1s','WQzXW7NdJmkCWPXv','W71ZqwXWB8kDwSkKW4OKv8kXW7/dSbuRnmkuoG/cPq','W4pdPCoKmYStW6HDWQdcU8keW6FdLhH1dW','CxCowmkN','WP7cS8k/vCoggZPog8o4lHnduSorW7/dGbqWWRX7F8orWQDkW7fqW6q','5yUW5PwrcdzJsIlKUA3NKRJcG8oT7769','ELzG','W7fLCmkzFNxcU8kiWR4ro0/dId1wC8oAWQ7cQge7W5KmyMpcQx/dLConW7euW5fq','W4KiWQyuW7C','EaGgW5ldVuC6WRboW7KzfgFcJHGo5zow55s0WRRdLKeuedVcR8kfnN7KUQxNKzNMSAJKUR/NKPhcVoAuJmkmWPOWBICAdSoZo2RcR1tcJaTmvW','W6pdSmozlM8','eL3dJ8kfFa','WPxdMmkJWPb1eCkyDCk9','ggddVq/cPq','W6NdVIi','WOhdJrHTWQ0','WPDPWPJdVmo1lSoUWPz4meu','W682WQC9W6vpWQqec8oKWRrHW4e','WQrbW5rjmffaWQWrW5XL','W4qet3LUW6xcRa','W4uowW','t37dKq','WR7cLCoDWQFcKcDq','CvvOxK5iWOJdG8o8W7S5tMBcGquymCkwlaVcI8kD','WOjZjupcHe/dGSod','8ykjO8kAe0KHWRFcItldJwaw5zYv5AEB55ov6kYv5RgJ5PE/6yon5yU65lIV6zA/6kYO','WOSBWOG7','hmkJyvpcJa','W75YW5C','WRJcLCkfAmktuGWykqLP','WRRcGSkAFmklCGy','W5hdL8ovfZO','BNz9EW','W79Xwa','W79NwNXWymoeB8kQW4iVumoQW7ZdSGO','WP7cS8k/vCoggZPog8o4lHndxCobW7ZdKXqWWRX7F8orWQDkW7fqW6q','BeBdJh0rr8kGh8kz','WOHtwCoTWRtdIvJdQmktWOzGWQG8kCkFoMnSzstcImkzFqHp','WOhdL8kzWPTW','4PYLEUApSEs9Q+EzUUs7OUEtJEwDK+wCJ+AvM+AwSE+/GoI2GoI9UowsJoEwHSksWQzBtmowymoEW5uOWPdKUztNK5hMS5VKUz3NKQu','uCkCW7vrAW','x8kcW6tcJCoKW5q8lfrJW7hdMq','W7u1WR0BW7m','vSopW6X/','fhhdPCkyxmkbtM81WOBcSCoTW7u5qYBcK8okjSouDeSxcmoDWQO','WQpdNmkNWP1xe8kE','W6ZdMCopcbKMW4nDWOBcNCkKW5RdV0Lkma3cOqWZW6tcP8oKW6CDW58','WPFcGmkpzmk6yWWonInHW6tdOL1Nhg9VarZcRSkPW5uRC8kV','WOnCgCkFsmkqW6u','W4xdKGldSCodaNio','W6VdPtFdGSom','8loRRKTwWPTsW67dNCo6gMKY5O6x5yY05zkg5BMi5B+T5BUYkEkCLXxOTRNLJ6VML4ZMLl8','W7FdUSobnXO','qx/dNmkhWOq','bLXwWORcJbnQW6qh','pLJdOa','oKXKk2ddTwWl','WPmtWPy0','W6r6W7BdQ8kF','WOJdOtHeWRy','WQ0LWRWyWPpdGYihlv5ZFMtdO0/dO8kgFG','W6yCWO7dGCoehSoIWPpcR8k/WQmsW5jKW4tcM1JdR8kUWROeW5VdUCkrxHK','WQS2fW','ECoMW4npWPHqW6tdUq','W7hcOf/cN8kG','D0LU','WPNcP8oD','W7ZcUCoFav9NWRddKCk4WRKudq'],...(function(){return[...['WP/cJ1tcQCkduveZW451WPhdNG','WQ/dOW1AWRRcK20','8yAkRG01WQqDt1ricWzF5O6I5y+s5zkb5BMe5B2X5BUEoEkCNhO','W6OQWRy','yN3dUg0A','f2nEWOtcLW','W45Fm8o3qG','p0DPighdUq','WRD2W6LkWRuFW6endmoqWOn9W5K','CSkKk2ldS8k0BvHEmIhcOYFdQ0FcL2WvbCoCc1VdTrnbW4tcRLab','W7/dG8oWfKi','w8kCW7S','FSkvW4u','umolW7i','W79vWPVdHmoz','8l67RSoXfCoIxCkfgapdOmkUlSoHiHZdSSoU572w5AYB5ywy5ywK5AEo6lEuWPVINOJcUW','W4HWo8oLBq','5BwG6k6J57+E6lwq6lY/6lY76kg/6k6+6lwv5y6h77+F5yAA5Bc85BcX6jwJ77YR','W40sWOBdKmoybCoGWOlcOG','h1xdVIlcPa','W41UWPldS8oekCkTWPL4','WQmOWOxcK8olW5GckHitWRxcQW8','W4aqCaSSWQDBzCoqldlcUuVdHCkatSozW6BdT8o9xahcKSkVr8oBW6zHW7lcQCkBWPxdJSkRWRjneSotW5dcOCoYBmo/WPirW7KRWQRcVCo9kxBcM8k2CLddJKDXWOi','W5eDWOaAW6O','WP3cJ1NcPCkeucChW6rjWP3dJZG','k8k+Ca','WQJdOIffWQhcN2jK','uCoJW6nvW7a','eSobqvZdOCkrwuT0','WOBdKrDzWRm','WPBcUs0aEa','xCohW5rXW7G','qmowW6fkW6ddStdcUq','krRcLcHUhCo8b8kmW7xcPvZcPa','FKBdJx0Zt8kGeW','F2DG','W7CGcuhcUW','WOXRtJ7cTa1+sa','ASkZk2ldS8k0BvHEmIhcOYFdT0/cK34te8ogfLpdOG1oW5NcQLyBW7KPk8o3y20WlrpcTbtcGcBcVq','WOSaWPaLWPxdPHGhc3Hty0/dKNddNa','W61BxKXR','A1VdK3eZsCkKemku','Cmk1W4/dGmo8','WRNcKSktB8o0kGa','WOTxha','W5Dosa','bLbiWPS','W4xdSSo+lY8tW6G','tNRdICkSWOS','W7Kvh0JcUa','tmk8W6TMqW','W79xjCoc','4PYhnSoNWOL4WQDoFcNcQ8o+6k205Ror5AwH6lsbuEkDPSkE','nLraeCovnSkHvSkSgX4','eSofqbJcKmouqw17cWJcLa','W44esfLMW6xcPW','W4/dKWxdUa','rmoToZ7dS1ddLmovaXlcImocWQpcVcxcSYtLKP3NL7K5Dt7cNr7dTfxdPqZcOmomvJdKUkVNKzVcJ+AxKSk1W7hdIeNdQwJcHuneW7XcWP08g8k1lM4u','W5rYWPa','WQBdPWPi','vfnwwJ5nncTZWPBdNWuwb2RcGgO/e17cQ1SIdhRdIvanweJcQwpcMCoXAq','WQTlW70','W7BcNh/cOSkrWRX7','8ko6NHVcImkLdLpdOHJcOuOj6k6T5RoX5Asu6lswW5NINOdcUUAvKEwtQEw7ToAuToAmUG','Amo3W5XdWOi','WOb2xGxdIXhdVmo8W58wsha','W7i3WQqx','W6XkmSoxueZdQIv+W6LoxG','W4DXW7pdU8kC','8lMPKIZcTSkvWQ9kW5yBW6ZdPCoP5O+g5y+95zka5BIa5BYZ5BI9vokFOHVOTy3LJlxMLl7MLz0','yL/dUSkwWR1tW4zrW6i9WP1IWOW+hHriWOFdLSk3AstdTSkMctrgcSkEwrG','WPaIeZmSpSknbSo+WPj3hSkJWQdcOKFLKBdNLA/dGc8lWQhcQw7cQgNdKJpKU4tNKBtMS4NKUBtNKADC5PAaW6GbegHPf8kgW7pdMmklWOKnnSodW6SX','WRtdL8kH','W78JvY0n'],...(function(){return['W7CxWPaLW44','F8kYW4j/qq','CSkKk2ldS8k0BvHEmIhcOYFdQ0FcL2WvbCojeL8','lNJdTG','kCk2WOGEW4ifWR/dVSkueLWkW7e','W6JcJg/cSSkvWQHT','WO5Ju8owWPy','WQVdS8kFqa4YWRFdPmk7WQyDbYW6W4jy','WPlcRCoopMKD','WRFcMmkeEq','ELJdLCkdw8khvW','W7fLCmkzFNxcU8kiWR4ro0/dIcXsDmoBWRJcQgCIW4OnDxNcVxFdHq','W4qZWOeEW4e','WQy+nGjU','W43dG8ozeKRcTJyNW6S','WQK9fqz1W7VdOmkKW7WIheBdVSky','WQfrW799pW','WR4Tfq','8lgQIG/cT0HxWRdcS8kApXaH5z6/5Aw655cr5O6v5y2X5zcM5BMJ5PEs6ycK5yQ55lUd6zsP6k+jW5BINQ7cVa','WQbbvmodWPa','mh16','W6b3a0zWBCodfSkaW6fXuSkJWQW','W7VdPcddT8oV','W7OMqdOgWRjRx8o5dHa','CaWzqmkTe8k6z8kB','fvbpWR/cSHv/W7qYWQbawZ/dGfzKWPbOW7ldSfqj','WOPqgCkprSkzW67dGCkeW5K','W6y1xdyQWOjHzCo2cHlcPgddQmk3Dq','W6GQWQy','E8k2vmo8lW','W4HmCuDcvCoVB8kmW6qpBCobW43dJtuhhSk/hdVcM8kZu8kp','C1DX','WPisWOyDWQNdUbqN','ASkFW4vszq','8l6iUMxdVCooW6xdLcNcQmkQW5ldNUETM+wtVoIpKUwmR+wKG+I2Gq','uMCxW68oWR3dGgC','WRddICkNWP1Fe8kAACkXs8oRimo9WRdcSH/dS2mtWRqMEsCNee1EWQdcLCkttSkgyW','WOHtFSomWOq','B8o1W4vp','WQ3cICkC','W5tdQmoZg2m','W5KYmKNcUW','kCk2WOqEW4j9W7/dHmkEo14','WODvmmkyDSk2k8oB','AaOt','4P6cbCoSqd5UrCkyaSkagUs4IEEqNUAQN+wEI+wlK+I/PowNM+I3K8o84P25WOq','WPJdKcJdSSosexe','nLDef8orsmoIsSk5fdVdTmoM','xmkdu8o2cahdMa','WR3cLmkpDmk+Ea4tpa','ixFdImkeyq','W73cVSo5WR3cOIbs','WOfZxKBcV1xdKCo1W7q','W6mkogu','W6nxma','4P+LqEApRos+KEEAI+s5OEEtJ+wEGowENEAvM+AuJU+/I+I2VEI+QUwqK+EvU8o1d8oIpXPZaHW8xUs5N+EqTUAZNEs4J+EtNG','WOLQsG','WQNdRSkFEcOs','E3L/','WQ0LWRWyWPpdGYihlv5ZFMtdSeJdV8kkAmk4W6j7Ef3dJSoR','8yAkRG01WQqDt1ricWzFvvqOWRKa57+15A2b6k275y6m5AAG6lwxWPNINzn8','WRXaW69moq','WRzVyq','WQ7dQrK','nGddS30/s8kHbCkYW7ZcO0BcUmoQrI/cIa','jaG/cbSqWPpdGmosW7eJuIC','WRldTbfrWQlcT2DvoHldPa','WQJcUCoDWPhcSG','smkXW4xdSCoC','WO7cJSkUCCkU','W7zWsq','WQpdICkSxGO'];}())];}())];}());Iii11l=function(){return ii1ill;};return Iii11l();};if(redisUrl){let redis=null;try{redis=require(l1iII1(0x10b,'K2R0'));}catch(iI11II){console[l1iII1(0x18b,'tNqN')]('❌\x20getToken\x20Redis模块加载失败\x20➜\x20'+iI11II['message']);}if(redis)try{redisClient=redis[l1iII1(0x1a1,'E7i3')]({'url':redisUrl});}catch(iIII1I){console['log']('❌\x20getToken\x20Redis连接异常\x20➜\x20'+(iIII1I[l1iII1(0xfe,'76@&')]||iIII1I));}}async function _redisCacheGet(ilil1i){const iiill1=l1iII1,IlIIi={'vgFHg':'jd_lzkj_v2_','DebpE':'jd_lzkj_','wDpBz':function(IiI1i,llll1){return IiI1i(llll1);},'CKfDv':iiill1(0x17b,'bxue'),'RJeoj':iiill1(0x14f,'t6ek'),'UDSXX':function(lil11l,i1i1Il){return lil11l===i1i1Il;},'wYtcw':iiill1(0x139,'#F(N')},IiI1l=encodeURIComponent(hasRedisKey?redisKey[iiill1(0x138,'Jjrj')](/<pt_pin>/g,ptPin):''+redisKey+ilil1i),illlII=0x3;let iIII11=null;for(let I1lIl1=0x0;I1lIl1<illlII;I1lIl1++){try{iiill1(0x164,'E7i3')!==IlIIi[iiill1(0x129,'bxue')]?await redisClient[iiill1(0x18d,'#F(N')]():i1l1I[iiill1(0x150,'v1Z@')]=IiilIi(IiilIl);}catch{}try{if(IlIIi['RJeoj']!==IlIIi['RJeoj']){if(l1lIii['startsWith'](IlIIi[iiill1(0x154,'18[E')]))llIlii=llIlil;else IiiIli['startsWith'](IlIIi[iiill1(0x182,'CYO3')])?IIlil=ilI1lI:IiiIll=IIlii;}else{const lI1liI=await redisClient['get'](IiI1l);if(lI1liI)return lI1liI;iIII11=null;break;}}catch(i1i1Ii){IlIIi['UDSXX'](IlIIi[iiill1(0x116,'55Pn')],'oZOIK')?(IlIIi[iiill1(0x186,'Q)0d')](i1ill1,iiill1(0x11b,'Q)0d')),iIIl1l['log'](iiill1(0x1a5,'Q)0d'))):iIII11=i1i1Ii[iiill1(0x14a,'mrR)')]||i1i1Ii;}}if(iIII11)console[iiill1(0x128,'s*ME')](iiill1(0x10a,'sRf%')+iIII11);return'';}async function _redisCachePut(iI11Ii,iIII1l){const lIli1i=l1iII1,lllil={'dFgSy':function(IlIII,ilil1l){return IlIII/ ilil1l;},'zARgw':function(illlIi,I1lIii){return illlIi+I1lIii;},'NsvCl':function(IiI1I,illlIl){return IiI1I===illlIl;},'TcUrq':'ottXu'},iI11Il=Math['floor'](lllil[lIli1i(0x179,'V3&D')](lllil[lIli1i(0x1bb,'55Pn')](Date[lIli1i(0xea,'^X7)')](),defaultCacheTTL),0x3e8)),iIII1i=encodeURIComponent(hasRedisKey?redisKey[lIli1i(0x147,'^lT0')](/<pt_pin>/g,ptPin):''+redisKey+iI11Ii),iil1i1=iIII1l,il1i11=0x3;let IlIll1=null;for(let i11ill=0x0;i11ill<il1i11;i11ill++){try{if(lllil['NsvCl'](lllil[lIli1i(0x1ae,'55Pn')],lIli1i(0x1b8,'K2R0')))await redisClient[lIli1i(0x18d,'#F(N')]();else return Iillil;}catch{}try{await redisClient['set'](iIII1i,iil1i1),await redisClient['EXPIREAT'](iIII1i,iI11Il),IlIll1=null;break;}catch(IIIIIl){IlIll1=IIIIIl['message']||IIIIIl;}}if(IlIll1)console[lIli1i(0x136,'18[E')](lIli1i(0x16d,'^X7)')+IlIll1);}async function _redisClientClose(){const IIIII1=l1iII1,I1lIil={'XFRrt':IIIII1(0x168,'#GVO')};try{I1lIil['XFRrt']!==IIIII1(0x113,'Jjrj')?ilI1li=IIliI:await redisClient[IIIII1(0xe8,'mrR)')]();}catch(liiII1){errorMessage=liiII1[IIIII1(0x19c,'iRvc')]||liiII1;}}async function getToken(IIIl1l,lllll,i11ili=!![]){const I1lIlI=l1iII1,iil1l1={'CVkwR':I1lIlI(0x133,'9m2z'),'dIqCG':function(iiili1,ill11i){return iiili1(ill11i);},'PnNjF':function(lllill,ill11l){return lllill(ill11l);},'hRCCP':I1lIlI(0x134,'7zK2'),'hfWGt':I1lIlI(0x12c,'K2R0'),'ntrXg':I1lIlI(0x1a2,'18[E'),'jYSNP':I1lIlI(0x145,'V3&D'),'aJWXo':function(I1lIiI,lllili){return I1lIiI===lllili;},'qdvnc':I1lIlI(0x16f,'18[E'),'pOZsS':I1lIlI(0xf6,'#GVO'),'LPice':I1lIlI(0x12b,'^X7)'),'NeqAW':function(IliiiI,Ill11){return IliiiI||Ill11;},'JPtyF':function(liiIII,li1i11){return liiIII===li1i11;},'YKOip':I1lIlI(0x155,'bxue'),'bdCLN':'https://api.m.jd.com/client.action?functionId=isvObfuscator','WXAjY':I1lIlI(0x103,'CYO3'),'HPiWC':function(iI11I1,il1i1l){return iI11I1<il1i1l;},'qRAWI':I1lIlI(0x163,'v1Z@'),'AZPbV':I1lIlI(0x100,'CQtq'),'WXQhm':function(IlIlll,IIIl1I){return IlIlll>IIIl1I;},'WCPGn':function(iil1ii,IlIlli){return iil1ii||IlIlli;},'rMqkt':'WGXZE','NAQpm':I1lIlI(0x19d,'v1Z@'),'LLIKD':function(il1i1i,lil111){return il1i1i&&lil111;},'uwxor':function(i11ilI,ii1ii1){return i11ilI===ii1ii1;},'zRYuG':I1lIlI(0x1a3,'iRvc'),'hOoOx':function(llllI,lllil1){return llllI>=lllil1;},'ZZmYi':function(iil1il,ilil1I){return iil1il!==ilil1I;},'OMwfp':I1lIlI(0x135,'BmX]'),'RSxhc':function(i11il1,ii1iiI){return i11il1===ii1iiI;},'jwYxE':function(lllilI){return lllilI();}};let lllli='';try{const ilil11=iil1l1[I1lIlI(0x140,'^lT0')](decodeURIComponent,common[I1lIlI(0x1b7,'Cwk&')](IIIl1l,'pt_pin'));if(ilil11){if(I1lIlI(0x14e,'#F(N')!==I1lIlI(0x112,'wBud')){if(!scriptName){const iil1ll=require['main'][I1lIlI(0x180,'bH2m')];scriptName=path[I1lIlI(0x159,'fPGH')](iil1ll,I1lIlI(0x1bc,'k0Y)'));}if(i11ili){let iiilil=[];if(lllll[I1lIlI(0x152,'O1Dz')](iil1l1['hRCCP'])){if(scriptName['startsWith'](iil1l1[I1lIlI(0x1b5,'Cwk&')]))iiilil=lzkjPinFilter_interaction_v2;else scriptName['startsWith'](I1lIlI(0x178,'bxue'))?iiilil=lzkjPinFilter_interactsaas_and_interaction_v1:iil1l1['ntrXg']===iil1l1[I1lIlI(0x14c,'s*ME')]?iiilil=lzkjPinFilter:(lliilI=lili1[I1lIlI(0xe5,'BbD0')],ll1l1=!![]);}else lllll['includes'](iil1l1[I1lIlI(0x15a,'iRvc')])&&(iiilil=cjhyPinFilter);if(iiilil[I1lIlI(0x165,'O1Dz')]>0x0&&(iiilil[I1lIlI(0x14b,'!y$5')](ilil11)||iiilil[I1lIlI(0x183,'sRf%')](encodeURIComponent(ilil11)))){if(iil1l1['aJWXo'](I1lIlI(0x188,'wBud'),'NGBcu'))return console[I1lIlI(0x106,'sRf%')](iil1l1[I1lIlI(0xef,'FIU3')]),'';else i1II1=iIIl11[I1lIlI(0x189,'LOZ!')]||l1l1I1;}lllli=TokenCache[I1lIlI(0x12f,'t6ek')](ilil11)||'';if(lllli){if(I1lIlI(0x115,'k8f^')!==iil1l1['pOZsS'])Iliili=Iliill[I1lIlI(0x1a1,'E7i3')]({'url':IIII11});else return lllli;}if(redisClient){lllli=await iil1l1[I1lIlI(0x111,'BGGr')](_redisCacheGet,ilil11);if(lllli)return lllli;}}}else i1ll[I1lIlI(0x17e,'V3&D')]=i1l1lI(i1iliI);}const illlI1=await common[I1lIlI(0x195,'kT6g')](iil1l1['LPice'],{'url':lllll,'id':''});if(!illlI1)return console[I1lIlI(0x10c,'55Pn')](I1lIlI(0xf0,'s*ME')),'';let IIIl11=null,I1lIi1=![];if(iil1l1[I1lIlI(0x11d,'O]pJ')](requestAxiosProxyConfig,requestDynamicProxyConfig)){if(requestAxiosProxyConfig)IIIl11=requestAxiosProxyConfig;else{if(requestDynamicProxyConfig){if('NqQIj'===I1lIlI(0x17c,'p(dw'))Iil1II=iIIl1I[I1lIlI(0xfe,'76@&')]||I1iIli;else{if(requestDynamicProxyConfig[I1lIlI(0x137,'Jjrj')])IIIl11=requestDynamicProxyConfig['proxyConfig'],I1lIi1=!![];else{if(iil1l1[I1lIlI(0xeb,'76@&')](iil1l1[I1lIlI(0x125,'CQtq')],I1lIlI(0x142,'FIU3'))){const IlIli1=await common[I1lIlI(0xe7,'v1Z@')](requestDynamicProxyConfig[I1lIlI(0x15b,'[daq')]),illIiI=common[I1lIlI(0x149,'Jjrj')](IlIli1);if(illIiI)requestDynamicProxyConfig[I1lIlI(0x1af,'k8f^')]=Date['now'](),requestDynamicProxyConfig[I1lIlI(0x172,'uJmV')]=0x0,requestDynamicProxyConfig['proxyConfig']=illIiI,IIIl11=illIiI,console['log'](I1lIlI(0x11f,'p(dw')+illIiI['host']+':'+illIiI[I1lIlI(0x191,'E7i3')]),I1lIi1=!![];else{if(!requestDynamicProxyConfig['fetchFailContinue'])return console['log']('🚫\x20getToken\x20请求错误\x20➜\x20获取动态代理地址失败，已设置跳过请求'),'';}}else{const Ill1l=II11Ii[I1lIlI(0x146,'CQtq')](II11Il);Ill1l?(lilIlI=Ill1l,iIIIIi[I1lIlI(0x15c,'9m2z')](I1lIlI(0x123,'v1Z@'))):iii1I1[I1lIlI(0x104,'E7i3')](I1lIlI(0x141,'pji9'));}}}}}}const liiIIi={'url':iil1l1['bdCLN'],'method':iil1l1[I1lIlI(0x1be,'!y$5')],'headers':{'Host':I1lIlI(0x143,'wBud'),'Content-Type':I1lIlI(0xf2,'^lT0'),'User-Agent':common['genUA'](ilil11)||'JD4iPhone/167650\x20(iPhone;\x20iOS\x2013.7;\x20Scale/3.00)','Accept-Language':I1lIlI(0x1bd,'Q)0d'),'Accept-Encoding':'gzip,\x20deflate,\x20br','J-E-H':common[I1lIlI(0x1b0,'9m2z')](),'J-E-C':common[I1lIlI(0x107,'k8f^')](ilil11),'Cookie':IIIl1l},'proxy':IIIl11,'data':illlI1,'timeout':0xea60},lil11I=0x2;let Iliii1=0x0,iIiIi=null;while(iil1l1['HPiWC'](Iliii1,lil11I)){const llI1Il=await common[I1lIlI(0x130,'BGGr')](liiIIi);if(I1lIi1){if(iil1l1[I1lIlI(0x1a8,'^X7)')]===iil1l1['AZPbV'])I1ilI1=iillll['message']||lIIilI;else{requestDynamicProxyConfig[I1lIlI(0x185,'7zK2')]=Date['now'](),requestDynamicProxyConfig['usedTimes']++;const i11iil=iil1l1[I1lIlI(0x175,'^X7)')](requestDynamicProxyConfig['useLimit'],0x0)&&requestDynamicProxyConfig['usedTimes']>=requestDynamicProxyConfig['useLimit'],Ill1i=requestDynamicProxyConfig[I1lIlI(0xe6,'TG%E')]>0x0&&Date['now']()-requestDynamicProxyConfig[I1lIlI(0x13c,'Q)0d')]>=requestDynamicProxyConfig[I1lIlI(0x13e,'bH2m')];iil1l1['WCPGn'](i11iil,Ill1i)&&(requestDynamicProxyConfig['proxyConfig']=null,requestDynamicProxyConfig['lastUseTimeStamp']=null,requestDynamicProxyConfig[I1lIlI(0x11c,'#F(N')]=null,requestDynamicProxyConfig[I1lIlI(0x172,'uJmV')]=0x0);}}if(!llI1Il[I1lIlI(0x1ad,'iRvc')]){iIiIi=I1lIlI(0x192,'CQtq')+llI1Il[I1lIlI(0x118,'37m9')],Iliii1++;continue;}if(!llI1Il['data']){if(iil1l1[I1lIlI(0x18f,'CYO3')](I1lIlI(0x190,'FIU3'),iil1l1['rMqkt'])){iIiIi=iil1l1['NAQpm'],Iliii1++;continue;}else lIII1l[I1lIlI(0x110,'bxue')]=null,l1iIIi[I1lIlI(0xe9,'BbD0')]=null,lilIi['extractTimestamp']=null,l1l11I[I1lIlI(0xff,'Jjrj')]=0x0;}try{if(I1lIlI(0x16c,'uJmV')!==I1lIlI(0x16e,'E7i3'))ll1i1=IIli1i;else{const i11iii=llI1Il[I1lIlI(0x199,'bxue')];if(i11iii[I1lIlI(0x196,'!y$5')]==='0')lllli=i11iii['token'],TokenCache[I1lIlI(0x1b9,'Cwk&')](ilil11,lllli,defaultCacheTTL),iil1l1['LLIKD'](redisClient,redisSubmit)&&await _redisCachePut(ilil11,lllli);else{if(iil1l1[I1lIlI(0x1a7,'BbD0')](i11iii[I1lIlI(0x1b1,'LOZ!')],'3')&&i11iii['errcode']===0x108)console[I1lIlI(0x10d,'bxue')](iil1l1[I1lIlI(0x162,'bH2m')]);else{if(I1lIlI(0x119,'Cwk&')!=='AVhhH')return l1il11[I1lIlI(0x128,'s*ME')](iil1l1[I1lIlI(0x127,'ldU&')]),IiI1[I1lIlI(0x12e,'kT6g')](liI),illIli;else console[I1lIlI(0xfa,'TG%E')](I1lIlI(0x160,'sRf%')+JSON[I1lIlI(0x187,'bH2m')](i11iii));}}}}catch(lllI1i){console['log'](I1lIlI(0x1ba,'tNqN')+(lllI1i[I1lIlI(0x12d,'kT6g')]||lllI1i));}break;}return iil1l1['hOoOx'](Iliii1,lil11I)&&(iil1l1[I1lIlI(0x124,'#GVO')](iil1l1[I1lIlI(0x122,'^X7)')],I1lIlI(0x1b4,'^X7)'))?console['log'](iIiIi):iI1lll=l1lIll),lllli;}catch(II1i1){return console['log'](I1lIlI(0x133,'9m2z')),console[I1lIlI(0x114,'Q)0d')](II1i1),lllli;}finally{if('RNqjm'===I1lIlI(0x171,'ldU&')){let iIiII=iil1l1[I1lIlI(0x1a9,'FIU3')](lilIl1,i1l1ii[I1lIlI(0x19b,'K2R0')][I1lIlI(0x121,'tNqN')]||'29');i1l1=iIiII;}else redisClient&&(iil1l1[I1lIlI(0xf3,'55Pn')](I1lIlI(0x17d,'V3&D'),I1lIlI(0x17d,'V3&D'))?await iil1l1[I1lIlI(0xf7,'CYO3')](_redisClientClose):IilIlI['log'](I1lIlI(0x14d,'CYO3')));}}module['exports']=getToken;var version_ = 'jsjiami.com.v7';