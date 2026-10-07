window.ML_CATALOG=[{"u":"ch2/01-big-picture.html","t":"先看清全局：這個模型要替誰做什麼？","s":"先看清全局","ch":2,"cn":"完整的機器學習專案","i":1,"h":[["task","任務：預測加州每個街區的房價中位數"],["frame","把問題「分類」：它到底是哪一種 ML 任務？"],["notation","先把符號講清楚"],["metrics","RMSE 與 MAE：兩種匯總誤差的方式"],["norms","把它們看成同一家族：ℓk 範數"],["python","Python 實作：自己算，再跟 sklearn 對答案"],["check","常見陷阱與自我檢查"]]},{"u":"ch2/02-get-data.html","t":"取得資料，然後立刻把一部分鎖起來","s":"取得資料，然後立刻把一部分鎖起來","ch":2,"cn":"完整的機器學習專案","i":2,"h":[["info","第一眼：info() 告訴你的三件事"],["describe","describe() 與 value_counts()"],["histograms","直方圖：這份資料被動過手腳"],["testset","切出測試集：現在就鎖起來，別再看"],["strat","分層抽樣：讓測試集「長得像」全體"],["sklearn","用 Scikit-Learn 實作"],["compare","成果驗收：偏差比較表"],["check","常見陷阱與自我檢查"]]},{"u":"ch2/03-explore.html","t":"探索資料：先用眼睛，再用相關係數","s":"探索資料","ch":2,"cn":"完整的機器學習專案","i":3,"h":[["geo","地理散佈圖：一張圖看三件事"],["pearson","Pearson 相關係數：把「一起變動」變成一個數字"],["shapes","r 看不到的東西"],["corrlist","房價跟誰最相關？"],["matrix","散佈矩陣：一次看所有兩兩組合"],["income","收入 vs 房價：放大那一格"],["combo","屬性組合：自己做出更好的特徵"],["python","Python 實作：本篇完整流程"],["check","常見陷阱與自我檢查"]]},{"u":"ch2/04-prepare.html","t":"準備資料：把資料整理成模型吃得下的樣子","s":"準備資料","ch":2,"cn":"完整的機器學習專案","i":4,"h":[["why","先說好：每個步驟都寫成可重複執行的程式"],["cleaning","資料清理：缺值怎麼辦？"],["design","用 SimpleImputer 補值，順便認識 Scikit-Learn 的設計"],["categorical","類別屬性：把文字變成數字"],["custom","自訂轉換器：把屬性組合包起來"],["scaling","特徵縮放"],["gd","為什麼尺度這麼重要？"],["pipeline","Pipeline：把所有步驟串起來"],["python","Python 實作：本篇完整流程"],["check","常見陷阱與自我檢查"]]},{"u":"ch2/05-train.html","t":"選模型與訓練：別被訓練集的分數騙了","s":"選模型與訓練","ch":2,"cn":"完整的機器學習專案","i":5,"h":[["linear","第一個模型：線性迴歸"],["tree","第二個模型：決策樹，RMSE 竟然是 0"],["playground","實驗：模型複雜度 vs 兩種誤差"],["cv","用交叉驗證打分數"],["compare","三個模型的成績單"],["forest","隨機森林：很多棵樹一起投票"],["shortlist","多試幾種模型，挑出候選名單"],["python","Python 實作：本篇完整流程"],["check","常見陷阱與自我檢查"]]},{"u":"ch2/06-tune-launch.html","t":"微調、測試、上線：最後一哩路","s":"微調、測試、上線","ch":2,"cn":"完整的機器學習專案","i":6,"h":[["grid","Grid Search：把組合全部試一遍"],["results","讀懂搜尋結果"],["random","Randomized Search：搜尋空間大時的選擇"],["importance","分析最佳模型：它到底靠什麼猜房價？"],["test","測試集：期末考只考一次"],["curse","為什麼測試分數通常比交叉驗證差？"],["present","呈現成果"],["launch","上線、監控、維護"],["python","Python 實作：本篇完整流程"],["check","常見陷阱與自我檢查"],["recap","整個專案一頁回顧"]]},{"u":"ch3/01-mnist-binary.html","t":"MNIST 與 5 偵測器：準確率 95%，真的很厲害嗎？","s":"MNIST 與 5 偵測器","ch":3,"cn":"分類","i":1,"h":[["mnist","MNIST：七萬張手寫數字"],["pixels","一張圖＝784 個數字"],["split","已經切好、洗好的訓練集"],["binary","二元分類器：5 偵測器"],["sgd","SGDClassifier 在算什麼"],["loss","Loss function：hinge loss 與推導"],["accuracy","用交叉驗證量準確率"],["dumb","笨分類器也有 91%"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch3/02-confusion-f1.html","t":"混淆矩陣：把「猜對幾張」拆成四個格子","s":"混淆矩陣","ch":3,"cn":"分類","i":2,"h":[["cvp","先拿到乾淨的預測"],["cm","混淆矩陣的四個格子"],["inside","每一格裡長什麼樣子"],["pr","Precision 與 Recall"],["cheat","兩種作弊法"],["f1","F1：調和平均與推導"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch3/03-threshold-pr.html","t":"門檻與 PR 曲線：魚與熊掌怎麼選","s":"門檻與 PR 曲線","ch":3,"cn":"分類","i":3,"h":[["tradeoff","分數、門檻與取捨"],["extremes","大門檻與小門檻"],["which","該重視 Precision 還是 Recall"],["score","拿到決策分數"],["threshold","在真實資料上移動門檻"],["p90","找出 90% Precision 的門檻"],["prcurve","PR 曲線"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch3/04-roc-imbalanced.html","t":"ROC 曲線：AUC 0.96 為什麼還不夠好","s":"ROC 曲線","ch":3,"cn":"分類","i":4,"h":[["roc","ROC 曲線畫的是什麼"],["lab","在真實資料上走一遍 ROC 曲線"],["random","隨機分類器是一條對角線"],["auc","AUC：曲線下面積"],["imbalanced","正類很少時，ROC 為什麼太樂觀"],["forest","隨機森林 vs SGD"],["rates","不同正類比例下的 ROC 與 PR"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch3/05-multiclass.html","t":"多類別分類：十個數字，怎麼用二元分類器來分？","s":"多類別分類","ch":3,"cn":"分類","i":5,"h":[["native","天生多類別 vs 只能二選一"],["strategies","OvR 與 OvO"],["svc","SVC：45 場對決"],["sgd","SGD：10 個「偵測器」"],["scaling","縮放特徵，準確率提高"],["errors","錯誤分析：10 × 10 的混淆矩陣"],["three-five","3 和 5 為什麼常搞混"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch3/06-averaging-multilabel.html","t":"多類別指標與多標籤：一個分數，三種平均法","s":"多類別指標與多標籤","ch":3,"cn":"分類","i":6,"h":[["perclass","每一類各算一次"],["averages","三種平均：micro、macro、weighted"],["mnist","真實 MNIST 上的三種平均"],["multilabel","多標籤分類"],["knn","課本的例子：大數字、奇數"],["python","Python 實作"],["check","常見陷阱與自我檢查"],["recap","整章回顧"]]},{"u":"ch4/01-linear-normal-equation.html","t":"線性迴歸與正規方程式：一個公式直接算出最佳直線","s":"線性迴歸與正規方程式","ch":4,"cn":"訓練模型","i":1,"h":[["map","這一章的地圖"],["model","線性迴歸模型"],["mse","怎麼判斷一條線好不好：MSE"],["lab","自己調一條直線"],["normal","正規方程式：推導"],["hand","三個點，親手算一次"],["numpy","用 NumPy 實作"],["sklearn","scikit-learn 與虛反矩陣"],["cost","計算量：什麼時候會太慢"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/02-gradient-descent.html","t":"梯度下降：蒙著眼睛，一步一步走下山","s":"梯度下降","ch":4,"cn":"訓練模型","i":2,"h":[["idea","下山的想法"],["slope","一個參數：往斜率的反方向走"],["lab1","實驗：學習率與地形"],["pitfall","兩個陷阱與凸函數"],["contour","兩個參數：梯度向量與等高線"],["scaling","特徵縮放"],["bgd","批次梯度下降的公式"],["impl","實作：三種學習率"],["stop","要走幾步？容忍度"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/03-sgd-minibatch.html","t":"隨機與小批次梯度下降：每次只看一部分資料","s":"隨機與小批次梯度下降","ch":4,"cn":"訓練模型","i":3,"h":[["why","每一步只看一筆資料"],["step","SGD 的一步"],["lab","實驗：三種梯度下降的路徑"],["schedule","學習時程與 epoch"],["sklearn","scikit-learn 的 SGDRegressor"],["minibatch","小批次梯度下降"],["compare","五種方法的比較"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/04-poly-learning-curves.html","t":"多項式迴歸與學習曲線：模型太簡單，還是太複雜？","s":"多項式迴歸與學習曲線","ch":4,"cn":"訓練模型","i":4,"h":[["poly","多項式迴歸"],["degree","實驗：次數越高越好嗎？"],["diagnose","欠擬合還是過擬合？"],["curves","學習曲線"],["biasvar","偏差與變異的取捨"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/05-regularization.html","t":"正則化：替模型的權重加上限制","s":"正則化","ch":4,"cn":"訓練模型","i":5,"h":[["why","為什麼要正則化"],["ridge","Ridge 迴歸"],["lab","實驗：調整 α"],["measure","訓練用的成本，不等於評估用的指標"],["lasso","Lasso 迴歸"],["geometry","為什麼 Lasso 會把權重變成 0？"],["elastic","Elastic Net 與怎麼選"],["early","提前停止"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/06-logistic.html","t":"邏輯迴歸：用迴歸來做分類","s":"邏輯迴歸","ch":4,"cn":"訓練模型","i":6,"h":[["idea","用迴歸做分類"],["sigmoid","sigmoid 函數"],["cost","成本函數：log loss"],["gradient","推導梯度"],["iris","鳶尾花資料"],["boundary","決策邊界（一個特徵）"],["two","兩個特徵：線性的決策邊界"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/07-softmax.html","t":"Softmax 迴歸：一次分好幾類","s":"Softmax 迴歸","ch":4,"cn":"訓練模型","i":7,"h":[["score","每個類別一個分數"],["softmax","softmax 函數"],["predict","預測：argmax"],["cost","成本函數：交叉熵"],["compare","邏輯迴歸 vs. softmax 迴歸"],["sklearn","用 scikit-learn 分三種鳶尾花"],["boundary","決策邊界：為什麼是直線？"],["special","邏輯迴歸是 softmax 的特例"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]}];
window.ML_ICON_UP="<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5M5 12l7-7 7 7\"/></svg>";window.ML_ICON_SEARCH="<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m20 20-3.5-3.5\"/></svg>";

(function(){
'use strict';
var D=document,root=D.documentElement,body=D.body;
var BASE=body.getAttribute('data-root')||'';
var PAGE=body.getAttribute('data-page')||'';
var CAT=window.ML_CATALOG||[];
function get(k,d){try{var v=localStorage.getItem('mlnotes:'+k);return v===null?d:JSON.parse(v)}catch(e){return d}}
function set(k,v){try{localStorage.setItem('mlnotes:'+k,JSON.stringify(v))}catch(e){}}
function $(s,el){return (el||D).querySelector(s)}
function $$(s,el){return Array.prototype.slice.call((el||D).querySelectorAll(s))}

/* ---- theme ---- */
function isDark(){var t=root.getAttribute('data-theme');if(t)return t==='dark';return !!(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)}
$$('.ml-theme').forEach(function(b){
  function lab(){b.setAttribute('aria-label',isDark()?'切換成淺色模式':'切換成深色模式');b.title=b.getAttribute('aria-label')}
  lab();
  b.addEventListener('click',function(){var t=isDark()?'light':'dark';root.setAttribute('data-theme',t);try{localStorage.setItem('mlnotes:theme',t)}catch(e){}lab();window.dispatchEvent(new Event('resize'))});
});

/* ---- reading state ---- */
var read=get('read',[]);if(!Array.isArray(read))read=[];
function markRead(id){if(id&&read.indexOf(id)<0){read.push(id);set('read',read);paintRead()}}
function paintRead(){
  $$('[data-id]').forEach(function(a){a.classList.toggle('done',read.indexOf(a.getAttribute('data-id'))>=0)});
  $$('[data-chprog]').forEach(function(el){var ids=el.getAttribute('data-chprog').split(','),n=ids.filter(function(i){return read.indexOf(i)>=0}).length;
    var bar=$('i',el),txt=$('span',el);if(bar)bar.style.width=(100*n/ids.length)+'%';if(txt)txt.textContent='已讀 '+n+'／'+ids.length+' 篇'});
}
paintRead();
if(PAGE)set('last',PAGE);

/* ---- continue button (home) ---- */
var cont=$('#ml-continue'),last=get('last',null);
if(cont&&last){var p=CAT.filter(function(x){return x.u===last})[0];if(p){cont.href=BASE+p.u;$('span',cont).textContent='繼續閱讀：第 '+p.ch+' 章第 '+p.i+' 篇 '+p.s;cont.hidden=false}}

/* ---- drawer ---- */
var menu=$('.ml-menu');
function closeMenu(){body.classList.remove('ml-open');if(menu)menu.setAttribute('aria-expanded','false')}
if(menu){menu.addEventListener('click',function(){var o=body.classList.toggle('ml-open');menu.setAttribute('aria-expanded',String(o));if(o){var c=$('.ml-side a.cur');if(c)c.scrollIntoView({block:'center'})}})}
var scrim=$('.ml-scrim');if(scrim)scrim.addEventListener('click',closeMenu);
$$('.ml-side a').forEach(function(a){a.addEventListener('click',closeMenu)});

/* ---- progress bar, back-to-top, mark-as-read ---- */
var bar=$('.ml-progress i'),up=D.createElement('button');
up.className='ml-up';up.type='button';up.setAttribute('aria-label','回到頂端');up.innerHTML=window.ML_ICON_UP||'↑';body.appendChild(up);
up.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
var ticking=false;
function onScroll(){ticking=false;var h=root.scrollHeight-innerHeight,r=h>0?Math.min(1,scrollY/h):1;
  if(bar)bar.style.width=(r*100)+'%';up.classList.toggle('show',scrollY>700);if(PAGE&&r>0.92)markRead(PAGE)}
addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});
onScroll();

/* ---- scrollspy for the right rail ---- */
var links=$$('.ml-toc a[href^="#"]');
if(links.length&&'IntersectionObserver' in window){
  var secs=links.map(function(a){return D.getElementById(a.getAttribute('href').slice(1))}).filter(Boolean),vis={};
  var io=new IntersectionObserver(function(es){es.forEach(function(e){vis[e.target.id]=e.isIntersecting});
    var cur=null;for(var i=0;i<secs.length;i++){if(vis[secs[i].id]){cur=secs[i].id;break}}
    if(!cur){for(var j=secs.length-1;j>=0;j--){if(secs[j].getBoundingClientRect().top<innerHeight*0.3){cur=secs[j].id;break}}}
    links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur)})},{rootMargin:'-70px 0px -55% 0px'});
  secs.forEach(function(s){io.observe(s)});
}

/* ---- search ---- */
var dlg=null,inp,res,sel=0,items=[];
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function hl(t,q){if(!q)return esc(t);var i=t.toLowerCase().indexOf(q.toLowerCase());return i<0?esc(t):esc(t.slice(0,i))+'<mark>'+esc(t.slice(i,i+q.length))+'</mark>'+esc(t.slice(i+q.length))}
function build(){
  dlg=D.createElement('div');dlg.className='ml-dlg';dlg.setAttribute('role','dialog');dlg.setAttribute('aria-modal','true');dlg.setAttribute('aria-label','搜尋講義');
  dlg.innerHTML='<div class="ml-dlg-box"><div class="ml-dlg-in">'+(window.ML_ICON_SEARCH||'')+'<input type="search" placeholder="搜尋標題或小節，例如：ROC、梯度下降、正則化" aria-label="搜尋關鍵字" autocomplete="off"></div><div class="ml-dlg-res" role="listbox"></div><div class="ml-dlg-hint">↑ ↓ 選擇・Enter 開啟・Esc 關閉</div></div>';
  body.appendChild(dlg);inp=$('input',dlg);res=$('.ml-dlg-res',dlg);
  dlg.addEventListener('click',function(e){if(e.target===dlg)closeS()});
  inp.addEventListener('input',run);
  inp.addEventListener('keydown',function(e){
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!items.length)return;sel=(sel+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;paintSel()}
    else if(e.key==='Enter'){if(items[sel]){location.href=items[sel].href;closeS()}}
    else if(e.key==='Escape'){closeS()}});
}
function run(){
  var q=inp.value.trim(),out=[];
  CAT.forEach(function(p){
    var pt=p.t+' '+p.s;
    if(!q||pt.toLowerCase().indexOf(q.toLowerCase())>=0)out.push({href:BASE+p.u,t:p.t,c:'第 '+p.ch+' 章 '+p.cn+'・第 '+p.i+' 篇',q:q,score:q?0:1});
    if(q)p.h.forEach(function(h){if(h[1].toLowerCase().indexOf(q.toLowerCase())>=0)out.push({href:BASE+p.u+'#'+h[0],t:h[1],c:'第 '+p.ch+' 章・'+p.t,q:q,score:1})});
  });
  out.sort(function(a,b){return a.score-b.score});out=out.slice(0,40);
  res.innerHTML=out.length?out.map(function(o){return '<a role="option" href="'+o.href+'">'+hl(o.t,o.q)+'<small>'+esc(o.c)+'</small></a>'}).join(''):'<div class="empty">找不到「'+esc(q)+'」，換個關鍵字試試。</div>';
  items=$$('a',res);sel=0;paintSel();items.forEach(function(a){a.addEventListener('click',closeS)});
}
function paintSel(){items.forEach(function(a,i){a.classList.toggle('sel',i===sel);if(i===sel)a.scrollIntoView({block:'nearest'})})}
function openS(){if(!dlg)build();dlg.classList.add('open');inp.value='';run();setTimeout(function(){inp.focus()},20)}
function closeS(){if(dlg)dlg.classList.remove('open')}
$$('.ml-search-btn').forEach(function(b){b.addEventListener('click',openS)});
addEventListener('keydown',function(e){
  var tag=(e.target.tagName||'').toLowerCase(),typing=tag==='input'||tag==='textarea'||e.target.isContentEditable;
  if((e.key==='k'&&(e.metaKey||e.ctrlKey))||(e.key==='/'&&!typing)){e.preventDefault();openS()}
  else if(e.key==='Escape'){closeS();closeMenu()}
});
})();
