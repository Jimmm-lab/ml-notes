window.ML_CATALOG=[{"u":"ch2/01-big-picture.html","t":"先看清全局：這個模型要替誰做什麼？","s":"先看清全局","ch":2,"cn":"完整的機器學習專案","i":1,"h":[["task","任務：預測加州每個街區的房價中位數"],["frame","把問題「分類」：它到底是哪一種 ML 任務？"],["notation","先把符號講清楚"],["metrics","RMSE 與 MAE：兩種匯總誤差的方式"],["norms","把它們看成同一家族：ℓk 範數"],["python","Python 實作：自己算，再跟 sklearn 對答案"],["check","常見陷阱與自我檢查"]]},{"u":"ch2/02-get-data.html","t":"取得資料，然後立刻把一部分鎖起來","s":"取得資料，然後立刻把一部分鎖起來","ch":2,"cn":"完整的機器學習專案","i":2,"h":[["info","第一眼：info() 告訴你的三件事"],["describe","describe() 與 value_counts()"],["histograms","直方圖：這份資料被動過手腳"],["testset","切出測試集：現在就鎖起來，別再看"],["strat","分層抽樣：讓測試集「長得像」全體"],["sklearn","用 Scikit-Learn 實作"],["compare","成果驗收：偏差比較表"],["check","常見陷阱與自我檢查"]]},{"u":"ch2/03-explore.html","t":"探索資料：先用眼睛，再用相關係數","s":"探索資料","ch":2,"cn":"完整的機器學習專案","i":3,"h":[["geo","地理散佈圖：一張圖看三件事"],["pearson","Pearson 相關係數：把「一起變動」變成一個數字"],["shapes","r 看不到的東西"],["corrlist","房價跟誰最相關？"],["matrix","散佈矩陣：一次看所有兩兩組合"],["income","收入 vs 房價：放大那一格"],["combo","屬性組合：自己做出更好的特徵"],["python","Python 實作：本篇完整流程"],["check","常見陷阱與自我檢查"]]},{"u":"ch2/04-prepare.html","t":"準備資料：把資料整理成模型吃得下的樣子","s":"準備資料","ch":2,"cn":"完整的機器學習專案","i":4,"h":[["why","先說好：每個步驟都寫成可重複執行的程式"],["cleaning","資料清理：缺值怎麼辦？"],["design","用 SimpleImputer 補值，順便認識 Scikit-Learn 的設計"],["categorical","類別屬性：把文字變成數字"],["custom","自訂轉換器：把屬性組合包起來"],["scaling","特徵縮放"],["gd","為什麼尺度這麼重要？"],["pipeline","Pipeline：把所有步驟串起來"],["python","Python 實作：本篇完整流程"],["check","常見陷阱與自我檢查"]]},{"u":"ch2/05-train.html","t":"選模型與訓練：別被訓練集的分數騙了","s":"選模型與訓練","ch":2,"cn":"完整的機器學習專案","i":5,"h":[["linear","第一個模型：線性迴歸"],["tree","第二個模型：決策樹，RMSE 竟然是 0"],["playground","實驗：模型複雜度 vs 兩種誤差"],["cv","用交叉驗證打分數"],["compare","三個模型的成績單"],["forest","隨機森林：很多棵樹一起投票"],["shortlist","多試幾種模型，挑出候選名單"],["python","Python 實作：本篇完整流程"],["check","常見陷阱與自我檢查"]]},{"u":"ch2/06-tune-launch.html","t":"微調、測試、上線：最後一哩路","s":"微調、測試、上線","ch":2,"cn":"完整的機器學習專案","i":6,"h":[["grid","Grid Search：把組合全部試一遍"],["results","讀懂搜尋結果"],["random","Randomized Search：搜尋空間大時的選擇"],["importance","分析最佳模型：它到底靠什麼猜房價？"],["test","測試集：期末考只考一次"],["curse","為什麼測試分數通常比交叉驗證差？"],["present","呈現成果"],["launch","上線、監控、維護"],["python","Python 實作：本篇完整流程"],["check","常見陷阱與自我檢查"],["recap","整個專案一頁回顧"]]},{"u":"ch3/01-mnist-binary.html","t":"MNIST 與 5 偵測器：準確率 95%，真的很厲害嗎？","s":"MNIST 與 5 偵測器","ch":3,"cn":"分類","i":1,"h":[["mnist","MNIST：七萬張手寫數字"],["pixels","一張圖＝784 個數字"],["split","已經切好、洗好的訓練集"],["binary","二元分類器：5 偵測器"],["sgd","SGDClassifier 在算什麼"],["loss","Loss function：hinge loss 與推導"],["accuracy","用交叉驗證量準確率"],["dumb","笨分類器也有 91%"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch3/02-confusion-f1.html","t":"混淆矩陣：把「猜對幾張」拆成四個格子","s":"混淆矩陣","ch":3,"cn":"分類","i":2,"h":[["cvp","先拿到乾淨的預測"],["cm","混淆矩陣的四個格子"],["inside","每一格裡長什麼樣子"],["pr","Precision 與 Recall"],["cheat","兩種作弊法"],["f1","F1：調和平均與推導"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch3/03-threshold-pr.html","t":"門檻與 PR 曲線：魚與熊掌怎麼選","s":"門檻與 PR 曲線","ch":3,"cn":"分類","i":3,"h":[["tradeoff","分數、門檻與取捨"],["extremes","大門檻與小門檻"],["which","該重視 Precision 還是 Recall"],["score","拿到決策分數"],["threshold","在真實資料上移動門檻"],["p90","找出 90% Precision 的門檻"],["prcurve","PR 曲線"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch3/04-roc-imbalanced.html","t":"ROC 曲線：AUC 0.96 為什麼還不夠好","s":"ROC 曲線","ch":3,"cn":"分類","i":4,"h":[["roc","ROC 曲線畫的是什麼"],["lab","在真實資料上走一遍 ROC 曲線"],["random","隨機分類器是一條對角線"],["auc","AUC：曲線下面積"],["imbalanced","正類很少時，ROC 為什麼太樂觀"],["forest","隨機森林 vs SGD"],["rates","不同正類比例下的 ROC 與 PR"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch3/05-multiclass.html","t":"多類別分類：十個數字，怎麼用二元分類器來分？","s":"多類別分類","ch":3,"cn":"分類","i":5,"h":[["native","天生多類別 vs 只能二選一"],["strategies","OvR 與 OvO"],["svc","SVC：45 場對決"],["sgd","SGD：10 個「偵測器」"],["scaling","縮放特徵，準確率提高"],["errors","錯誤分析：10 × 10 的混淆矩陣"],["three-five","3 和 5 為什麼常搞混"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch3/06-averaging-multilabel.html","t":"多類別指標與多標籤：一個分數，三種平均法","s":"多類別指標與多標籤","ch":3,"cn":"分類","i":6,"h":[["perclass","每一類各算一次"],["averages","三種平均：micro、macro、weighted"],["mnist","真實 MNIST 上的三種平均"],["multilabel","多標籤分類"],["knn","課本的例子：大數字、奇數"],["python","Python 實作"],["check","常見陷阱與自我檢查"],["recap","整章回顧"]]},{"u":"ch4/01-linear-normal-equation.html","t":"線性迴歸與正規方程式：一個公式直接算出最佳直線","s":"線性迴歸與正規方程式","ch":4,"cn":"訓練模型","i":1,"h":[["map","這一章的地圖"],["model","線性迴歸模型"],["mse","怎麼判斷一條線好不好：MSE"],["lab","自己調一條直線"],["normal","正規方程式：推導"],["hand","三個點，親手算一次"],["numpy","用 NumPy 實作"],["sklearn","scikit-learn 與虛反矩陣"],["cost","計算量：什麼時候會太慢"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/02-gradient-descent.html","t":"梯度下降：蒙著眼睛，一步一步走下山","s":"梯度下降","ch":4,"cn":"訓練模型","i":2,"h":[["idea","下山的想法"],["slope","一個參數：往斜率的反方向走"],["lab1","實驗：學習率與地形"],["pitfall","兩個陷阱與凸函數"],["contour","兩個參數：梯度向量與等高線"],["scaling","特徵縮放"],["bgd","批次梯度下降的公式"],["impl","實作：三種學習率"],["stop","要走幾步？容忍度"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/03-sgd-minibatch.html","t":"隨機與小批次梯度下降：每次只看一部分資料","s":"隨機與小批次梯度下降","ch":4,"cn":"訓練模型","i":3,"h":[["why","每一步只看一筆資料"],["step","SGD 的一步"],["lab","實驗：三種梯度下降的路徑"],["schedule","學習時程與 epoch"],["sklearn","scikit-learn 的 SGDRegressor"],["minibatch","小批次梯度下降"],["compare","五種方法的比較"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/04-poly-learning-curves.html","t":"多項式迴歸與學習曲線：模型太簡單，還是太複雜？","s":"多項式迴歸與學習曲線","ch":4,"cn":"訓練模型","i":4,"h":[["poly","多項式迴歸"],["degree","實驗：次數越高越好嗎？"],["diagnose","欠擬合還是過擬合？"],["curves","學習曲線"],["biasvar","偏差與變異的取捨"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/05-regularization.html","t":"正則化：替模型的權重加上限制","s":"正則化","ch":4,"cn":"訓練模型","i":5,"h":[["why","為什麼要正則化"],["ridge","Ridge 迴歸"],["lab","實驗：調整 α"],["measure","訓練用的成本，不等於評估用的指標"],["lasso","Lasso 迴歸"],["geometry","為什麼 Lasso 會把權重變成 0？"],["elastic","Elastic Net 與怎麼選"],["early","提前停止"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/06-logistic.html","t":"邏輯迴歸：用迴歸來做分類","s":"邏輯迴歸","ch":4,"cn":"訓練模型","i":6,"h":[["idea","用迴歸做分類"],["sigmoid","sigmoid 函數"],["cost","成本函數：log loss"],["gradient","推導梯度"],["iris","鳶尾花資料"],["boundary","決策邊界（一個特徵）"],["two","兩個特徵：線性的決策邊界"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch4/07-softmax.html","t":"Softmax 迴歸：一次分好幾類","s":"Softmax 迴歸","ch":4,"cn":"訓練模型","i":7,"h":[["score","每個類別一個分數"],["softmax","softmax 函數"],["predict","預測：argmax"],["cost","成本函數：交叉熵"],["compare","邏輯迴歸 vs. softmax 迴歸"],["sklearn","用 scikit-learn 分三種鳶尾花"],["boundary","決策邊界：為什麼是直線？"],["special","邏輯迴歸是 softmax 的特例"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch5/01-linear-svm.html","t":"線性 SVM：找出最寬的街道","s":"線性 SVM 與最寬的街道","ch":5,"cn":"支援向量機","i":1,"h":[["intro","SVM 能做什麼"],["separable","能把兩類分開的線，有無限多條"],["street","最寬的街道：大間隔分類"],["sv","支援向量：只有街道邊緣的資料說了算"],["formula","電腦怎麼記住一條街道"],["scale","SVM 很怕單位不一致"],["sklearn","用 scikit-learn 找出最寬的街道"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch5/02-soft-margin.html","t":"軟間隔與超參數 C：街道寬一點，還是違規少一點？","s":"軟間隔與超參數 C","ch":5,"cn":"支援向量機","i":2,"h":[["hard","硬間隔的兩個問題"],["soft","軟間隔：允許一點點違規"],["c","超參數 C：街道寬度和違規之間的取捨"],["cost","C 在成本函數裡做什麼"],["reg","C 是正則化的旋鈕"],["sklearn","在 scikit-learn 訓練線性 SVM"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch5/03-poly-kernel.html","t":"多項式特徵與多項式核：把資料搬到更高的維度","s":"多項式特徵與多項式核","ch":5,"cn":"支援向量機","i":3,"h":[["lift","加一個特徵，資料就分開了"],["poly-features","多項式特徵 + LinearSVC"],["explosion","次數一高，特徵數就爆炸"],["kernel-trick","核技巧：不用真的加特徵"],["poly-kernel","多項式核 SVC"],["coef0","coef0 在做什麼"],["svc-params","SVC 的參數一覽"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch5/04-rbf-kernel.html","t":"相似度特徵與高斯 RBF 核","s":"相似度特徵與高斯 RBF 核","ch":5,"cn":"支援向量機","i":4,"h":[["similarity","相似度特徵：和地標有多像"],["landmarks","兩個地標，讓資料變得可分"],["every-instance","每一筆資料都當地標"],["rbf-kernel","高斯 RBF 核：不用真的算出 m 個特徵"],["gamma","γ 怎麼調"],["complexity","計算量：該選哪一種 SVM？"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch5/05-svm-regression.html","t":"SVM 迴歸：讓資料盡量落在街道上","s":"SVM 迴歸","ch":5,"cn":"支援向量機","i":5,"h":[["reverse","把目標反過來"],["epsilon","ε 決定街道有多寬"],["cost","ε 不敏感損失"],["kernel","加上核：非線性迴歸"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch5/06-hard-margin-math.html","t":"SVM 背後的數學（一）：從超平面到硬間隔","s":"背後的數學：硬間隔","ch":5,"cn":"支援向量機","i":6,"h":[["hyperplane","超平面：線性的決策邊界"],["hypothesis","假設函數：看正負號"],["compare","怎麼比較兩個超平面"],["functional","函數間隔：乘上標籤"],["scale","尺度不變性與幾何間隔"],["optimal","最佳超平面：讓幾何間隔最大"],["problem","寫成最佳化問題"],["python","Python 實作"],["check","常見陷阱與自我檢查"]]},{"u":"ch5/07-soft-margin-math.html","t":"SVM 背後的數學（二）：軟間隔、hinge loss 與梯度下降","s":"背後的數學：軟間隔與 hinge loss","ch":5,"cn":"支援向量機","i":7,"h":[["outlier","硬間隔的弱點：離群值"],["slack","鬆弛變數：給每一筆資料一點彈性"],["qp","二次規劃與對偶問題"],["hinge","從鬆弛變數到 hinge loss"],["subgrad","折角怎麼微分：次導數"],["gd","用梯度下降訓練 SVM"],["sgd","SGDClassifier 的 alpha 和 C"],["lr","邏輯迴歸：大間隔，但不是最大間隔"],["oneclass","One-class SVM：異常偵測"],["recap","第 5 章回顧"],["check","常見陷阱與自我檢查"]]}];
window.ML_EXAMS=[{"u":"exams/2024-midterm.html","t":"2024 期中考","h":[["q1","第 1 題：分類與迴歸（Classification、Regression）"],["q2","第 2 題：訓練集、驗證集、測試集與交叉驗證"],["q3","第 3 題：特徵縮放 min-max 與標準化"],["q4","第 4 題：混淆矩陣、Precision／Recall 與取捨"],["q5","第 5 題：批次梯度下降與 Ridge 迴歸"],["q6","第 6 題：多項式特徵的假設函數"],["q7","第 7 題：Lasso 為什麼會把權重歸零"],["q8","第 8 題：Softmax 迴歸"]]},{"u":"exams/2024-final.html","t":"2024 期末考","h":[["q1","第 1 題：線性 SVM 的超參數 C（間隔、margin violation）"],["q2","第 2 題：RBF 相似度特徵（SVM、landmark）"],["q3","第 3 題：決策樹的 Gini 不純度（CART）"],["q4","第 4 題：決策樹的計算複雜度"],["q5","第 5 題：隨機森林的 OOB 誤差（bagging、bootstrap）"],["q6","第 6 題：集成學習（ensemble、voting）"],["q7","第 7 題：降維與 PCA（主成分分析）"],["q8","第 8 題：輪廓係數（silhouette、K-means）"],["q9","第 9 題：GMM 的參數（高斯混合模型）"],["q10","第 10 題：GMM 的異常偵測與分群邊界"]]},{"u":"exams/2023-final.html","t":"2023 期末考","h":[["q1","第 1 題：線性 SVM 的超參數 C"],["q2","第 2 題：RBF 相似度特徵"],["q3","第 3 題：決策樹（不需要特徵縮放、Gini 的最大最小值、計算複雜度）"],["q4","第 4 題：隨機森林的 OOB 誤差"],["q5","第 5 題：Gradient Boosting（梯度提升、殘差）"],["q6","第 6 題：降維與 PCA"],["q7","第 7 題：K-means 演算法（分群、centroid）"],["q8","第 8 題：GMM 的異常偵測與分群邊界"]]}];
window.ML_QA=[["ch4/01-linear-normal-equation.html","qa-mse-expand","矩陣形式的 MSE 要怎麼一步步展開？",0],["ch4/01-linear-normal-equation.html","qa-matrix-diff","微分怎麼微？可以一項一項做給我看嗎？",0],["ch4/01-linear-normal-equation.html","qa-symmetric","什麼是對稱矩陣？為什麼 XᵀX 一定是對稱的？",0],["ch4/01-linear-normal-equation.html","qa-degenerate","三個 x 都一樣時，為什麼會有無限多條「一樣好」的直線？",0],["ch4/02-gradient-descent.html","qa-plus","為什麼一定要「減」？改成加號會怎樣？",0],["ch4/02-gradient-descent.html","qa-cost","這裡說的「成本」到底是什麼？",0],["ch4/02-gradient-descent.html","qa-gradient","梯度到底是什麼？它是一個數字嗎？",0],["ch4/02-gradient-descent.html","qa-steepest","為什麼梯度一定指向「上升最快」的方向？",0],["ch4/04-poly-learning-curves.html","qa-degree-overfit","為什麼次數越高，模型越容易過擬合？",0],["ch4/05-regularization.html","qa-alpha-inf","為什麼 α 非常大時，模型會變成一條穿過平均值的水平線？",0],["ch4/05-regularization.html","qa-theta0-zero","為什麼 θ₀ 那一格放 0？",0],["ch4/05-regularization.html","qa-weight-decay","為什麼叫「權重衰減」？可以用數字舉例嗎？",0],["ch4/05-regularization.html","qa-ridge-invertible","為什麼只要 α > 0，括號裡的矩陣就一定可逆？可以一步一步證明嗎？",0],["ch4/05-regularization.html","qa-eigen","特徵值、特徵向量是什麼？為什麼有一個特徵值是 0，矩陣就不可逆？",0],["ch4/05-regularization.html","qa-subgradient","為什麼絕對值在 0 不能微分？「次梯度」又是什麼？",0],["ch4/05-regularization.html","qa-push","Lasso 和 Ridge 的「推力」差在哪？有沒有比喻？",0],["ch4/05-regularization.html","qa-tangent","為什麼最佳解會在 MSE 的等高線和懲罰項的等高線「剛好相切」的地方？",0],["ch4/05-regularization.html","qa-corner","為什麼最低點碰到 θ₁ 軸之後，就一直卡在軸上？",0],["ch4/05-regularization.html","qa-exact-zero","梯度下降只會在 0 附近跳，那 scikit-learn 的 Lasso 怎麼得到「剛好是 0」的權重？",0],["ch4/06-logistic.html","qa-sigmoid-range","為什麼 sigmoid 的輸出一定在 0 和 1 之間？",0],["ch4/06-logistic.html","qa-logit-inverse","可以直接從 p̂ = σ(t) 把 t 解出來嗎？",0],["ch4/06-logistic.html","qa-why-sigmoid","既然預測時不必算 sigmoid，為什麼還需要它？",0],["ch4/06-logistic.html","qa-separable","為什麼資料完全分得開時，權重會一直變大停不下來？",0],["ch4/06-logistic.html","qa-calculus","需要用到的微積分：指數和對數的微分",1],["ch4/07-softmax.html","qa-class-vectors","每個類別各有一組參數，它們彼此有關係嗎？",0],["ch4/07-softmax.html","qa-softmax-sum","為什麼加起來一定是 1？每個機率又為什麼一定在 0 和 1 之間？",0],["ch4/07-softmax.html","qa-argmax","max 和 argmax 差在哪？",0],["ch4/07-softmax.html","qa-ce-gradient","梯度 p̂ₖ − yₖ 有什麼直覺上的意義？",0],["ch5/01-linear-svm.html","qa-hyperplane","特徵超過兩個時，「一條直線」要換成什麼？",1],["ch5/01-linear-svm.html","qa-margin-half","間隔是街道的全寬，還是一半？",1],["ch5/01-linear-svm.html","qa-sv-name","為什麼叫做「支援向量」？",1],["ch5/01-linear-svm.html","qa-plus-minus-one","為什麼街道邊緣剛好是 h = 1 和 h = −1？",1],["ch5/02-soft-margin.html","qa-outlier","離群值一定是錯誤的資料嗎？",1],["ch5/02-soft-margin.html","qa-violation","在街道裡但沒有分錯，也算違規嗎？",1],["ch5/02-soft-margin.html","qa-c-saturate","為什麼 C 大到某個程度之後，答案就不再改變？",1],["ch5/02-soft-margin.html","qa-half-square","為什麼第一項寫成 ½‖w‖²，而不是直接用 ‖w‖？",1],["ch5/02-soft-margin.html","qa-c-alpha","C 和第 4 章 Ridge 的 α 有什麼關係？",1],["ch5/02-soft-margin.html","qa-linearsvc-svc","LinearSVC 和 SVC(kernel=\"linear\") 的答案為什麼不完全一樣？",1],["ch5/03-poly-kernel.html","qa-still-linear","加了 x₁² 之後，它還算是線性模型嗎？",1],["ch5/03-poly-kernel.html","qa-ten-features","degree=3 為什麼會變成 10 個特徵？",1],["ch5/03-poly-kernel.html","qa-kernel-name","「核」這個名字是什麼意思？為什麼叫核技巧？",1],["ch5/03-poly-kernel.html","qa-r0-even","coef0 = 0、次數是偶數時，邊界為什麼會對稱？",1],["ch5/04-rbf-kernel.html","qa-rbf-name","為什麼叫「高斯徑向基函數」？",1],["ch5/04-rbf-kernel.html","qa-m-by-m","為什麼是 m 筆 × m 個特徵，和原本的 n 無關？",1],["ch5/04-rbf-kernel.html","qa-sum-bells","RBF 核 SVM 的決策函數，為什麼是一堆鐘形加起來？",1],["ch5/04-rbf-kernel.html","qa-radius","為什麼說 γ 是影響半徑的倒數？",1],["ch5/05-svm-regression.html","qa-insensitive","為什麼街道裡的資料，完全不影響模型？",1],["ch5/05-svm-regression.html","qa-vs-mse","ε 不敏感損失和 MSE 差在哪裡？哪個比較好？",1],["ch5/06-hard-margin-math.html","qa-normal","為什麼 w 一定和超平面垂直？",1],["ch5/06-hard-margin-math.html","qa-functional-ch3","函數間隔和第 3 章的「間隔 t·s」是同一個東西嗎？",1],["ch5/06-hard-margin-math.html","qa-f-equals-1","為什麼可以直接規定 F = 1？不會改變答案嗎？",1],["ch5/06-hard-margin-math.html","qa-convex","什麼是凸二次規劃？為什麼比較好解？",1],["ch5/07-soft-margin-math.html","qa-slack","為什麼叫「鬆弛」變數？",1],["ch5/07-soft-margin-math.html","qa-lagrange","拉格朗日乘數的直覺是什麼？",1],["ch5/07-soft-margin-math.html","qa-hinge-name","為什麼叫 hinge loss？",1],["ch5/07-soft-margin-math.html","qa-sub-batch","次導數、次梯度，和第 4 章的「批次梯度下降」有關嗎？",1],["ch5/07-soft-margin-math.html","qa-fixed-lr","為什麼固定學習率會在最低點附近跳來跳去？",1],["ch5/07-soft-margin-math.html","qa-oc-math","One-class SVM 的最佳化問題長什麼樣？",1],["ch5/07-soft-margin-math.html","qa-nu","ν 的精確意思是什麼？",1]];
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


/* ---- smooth navigation ---- */
var reduce=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
function glide(id){var key=id&&decodeURIComponent(id),el=key&&D.getElementById(key);if(!el)return false;
  if(el.classList.contains('qa-pop')){if(!qaOpenId(key))return false;try{history.replaceState(null,'','#'+id)}catch(e){}return true}
  var qd=el.classList.contains('qa-note')&&el.querySelector('details');if(qd)qd.open=true;el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});try{history.replaceState(null,'','#'+id)}catch(e){}return true}
function go(href){
  var u=new URL(href,location.href);
  if(u.pathname===location.pathname){if(!glide(u.hash.slice(1)))location.href=u.href;return}
  if(u.hash){try{sessionStorage.setItem('mlnotes:goto',u.hash.slice(1))}catch(e){}u.hash=''}
  location.href=u.href;
}
D.addEventListener('click',function(e){
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  var a=e.target.closest&&e.target.closest('a[href]');if(!a||a.target==='_blank')return;
  var h=a.getAttribute('href');if(!h||/^(https?:|mailto:)/.test(h))return;
  var u=new URL(h,location.href);if(u.origin!==location.origin)return;
  if(u.pathname===location.pathname&&u.hash){e.preventDefault();if(u.hash==='#top'||u.hash==='#ml-end'){if(u.hash==='#top')window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});else toEnd();try{history.replaceState(null,'',location.pathname)}catch(_){}}else glide(u.hash.slice(1));return}
  if(u.hash){e.preventDefault();go(u.href)}
});
(function(){var id=null;try{id=sessionStorage.getItem('mlnotes:goto');sessionStorage.removeItem('mlnotes:goto')}catch(e){}
  if(id)setTimeout(function(){glide(id)},reduce?0:380)})();


/* ---- reader questions: the ? after a sentence opens a floating card (bottom sheet on phones) ---- */
var qaPops=$$('.qa-pop'),qaCur=null,qaTip=null,qaTipT=0;
var qaHasPop=typeof HTMLElement==='function'&&HTMLElement.prototype.hasOwnProperty('popover');
var qaNarrow=window.matchMedia?matchMedia('(max-width: 640px)'):{matches:false};
function qaDot(pop){return pop?$('.qa-dot[popovertarget="'+pop.id+'"]'):null}
function qaIsOpen(pop){if(!qaHasPop)return pop.classList.contains('qa-on');try{return pop.matches(':popover-open')}catch(e){return false}}
function qaJump(y){var sb=root.style.scrollBehavior;root.style.scrollBehavior='auto';window.scrollTo(0,Math.max(0,y));root.style.scrollBehavior=sb}
function qaPlace(pop,btn,below){
  var st=pop.style,inner=$('.qa-pop-in',pop);
  if(qaNarrow.matches||!btn){pop.classList.remove('qa-anch','qa-up');st.position=st.left=st.top=st.right=st.bottom=st.margin=st.width='';if(inner)inner.style.maxHeight='';return}
  var vw=root.clientWidth,vh=innerHeight,r=btn.getBoundingClientRect(),W=Math.min(520,vw-32),bar=$('.ml-top'),top=bar?bar.offsetHeight:0;
  var x=Math.max(16,Math.min(r.left+r.width/2-W/2,vw-W-16));
  st.position='absolute';st.right=st.bottom='auto';st.margin='0';st.width=W+'px';st.left=(x+scrollX)+'px';
  inner.style.maxHeight='none';var h=inner.scrollHeight+2;
  var dn=vh-r.bottom-20,upR=r.top-top-20,up=!below&&h>dn&&upR>dn;
  var mh=Math.max(200,Math.min(up?upR:dn,Math.round(vh*.76),640));inner.style.maxHeight=mh+'px';
  st.top=((up?r.top-Math.min(h,mh)-12:r.bottom+12)+scrollY)+'px';
  pop.classList.add('qa-anch');pop.classList.toggle('qa-up',up);
  pop.style.setProperty('--ax',Math.max(14,Math.min(r.left+r.width/2-x-7,W-26))+'px');
}
function qaShow(pop,btn,below){
  if(qaCur&&qaCur.pop!==pop)qaHide(qaCur.pop);
  qaHideTip();
  if(qaHasPop){if(!qaIsOpen(pop))try{pop.showPopover()}catch(e){}}else pop.classList.add('qa-on');
  qaCur={pop:pop,btn:btn};if(btn)btn.setAttribute('aria-expanded','true');
  qaPlace(pop,btn,below);
  try{pop.focus({preventScroll:true})}catch(e){}
  qaMarkSeen(pop);
  if(btn&&!qaNarrow.matches){var over=pop.getBoundingClientRect().bottom-innerHeight+16,room=btn.getBoundingClientRect().top-90;if(over>0&&room>0)window.scrollBy(0,Math.min(over,room))}
}
var qaSeen=get('qaSeen',[]);if(!Array.isArray(qaSeen))qaSeen=[];
function qaPaintSeen(b){var seen=qaSeen.indexOf(b.getAttribute('popovertarget'))>=0,l=b.getAttribute('aria-label')||'';
  b.classList.toggle('seen',seen);if(seen&&!/（已看過）$/.test(l))b.setAttribute('aria-label',l+'（已看過）')}
function qaMarkSeen(pop){if(qaSeen.indexOf(pop.id)<0){qaSeen.push(pop.id);set('qaSeen',qaSeen)}var b=qaDot(pop);if(b)qaPaintSeen(b)}
function qaHide(pop){if(qaHasPop){if(qaIsOpen(pop))try{pop.hidePopover()}catch(e){}}else{pop.classList.remove('qa-on');qaClosed(pop)}}
function qaClosed(pop){var b=qaDot(pop);if(b)b.setAttribute('aria-expanded','false');
  if(qaCur&&qaCur.pop===pop){qaCur=null;var a=D.activeElement;if(b&&(!a||a===body||pop.contains(a)))try{b.focus({preventScroll:true})}catch(e){}}}
function qaOpenId(id){var pop=D.getElementById(id),b=qaDot(pop);if(!pop||!b)return false;
  var d=b.closest('details');if(d&&!d.open)d.open=true;
  qaJump(scrollY+b.getBoundingClientRect().top-innerHeight*(qaNarrow.matches?.16:.3));
  qaShow(pop,b,true);return true}
function qaHint(b){if(qaCur&&qaCur.btn===b)return;
  if(!qaTip){qaTip=D.createElement('div');qaTip.className='qa-hint';qaTip.setAttribute('aria-hidden','true');body.appendChild(qaTip)}
  qaTip.innerHTML='<b>讀者提問</b>'+esc((b.getAttribute('aria-label')||'').replace(/^讀者提問：/,''));qaTip.classList.add('on');
  var r=b.getBoundingClientRect(),w=qaTip.offsetWidth,h=qaTip.offsetHeight,x=Math.max(8,Math.min(r.left+r.width/2-w/2,root.clientWidth-w-8)),y=r.top-h-8;
  if(y<70)y=r.bottom+8;qaTip.style.left=x+'px';qaTip.style.top=y+'px'}
function qaHideTip(){clearTimeout(qaTipT);if(qaTip)qaTip.classList.remove('on')}
if(qaPops.length){
  var qaWrap=$('.qa-pops');if(qaWrap&&qaWrap.parentNode!==body)body.appendChild(qaWrap);
  // a ? whose card was already opened stays faded on later visits, like a visited link (kept in this browser only)
  $$('.qa-dot').forEach(qaPaintSeen);
  addEventListener('storage',function(e){if(e.key==='mlnotes:qaSeen'){qaSeen=get('qaSeen',[]);if(!Array.isArray(qaSeen))qaSeen=[];$$('.qa-dot').forEach(qaPaintSeen)}});
  qaPops.forEach(function(pop){pop.addEventListener('toggle',function(e){if(e.newState==='closed')qaClosed(pop)})});
  D.addEventListener('click',function(e){
    var t=e.target,b=t.closest&&t.closest('.qa-dot');
    if(b){var pop=D.getElementById(b.getAttribute('popovertarget'));if(!pop)return;e.preventDefault();if(qaIsOpen(pop))qaHide(pop);else qaShow(pop,b);return}
    if(!qaHasPop&&t.closest&&t.closest('.qa-pop-x')){qaHide(t.closest('.qa-pop'));return}
    if(qaCur&&t.closest&&t.closest('.qa-pop a[href]'))qaHide(qaCur.pop);
  });
  if(!qaHasPop){
    D.addEventListener('pointerdown',function(e){if(qaCur&&!qaCur.pop.contains(e.target)&&!(qaCur.btn&&qaCur.btn.contains(e.target)))qaHide(qaCur.pop)});
    D.addEventListener('keydown',function(e){if(e.key==='Escape'&&qaCur)qaHide(qaCur.pop)});
  }
  addEventListener('resize',function(){if(qaCur)qaPlace(qaCur.pop,qaCur.btn)});
  D.addEventListener('pointerover',function(e){if(e.pointerType!=='mouse')return;var b=e.target.closest&&e.target.closest('.qa-dot');if(!b)return;clearTimeout(qaTipT);qaTipT=setTimeout(function(){qaHint(b)},150)});
  D.addEventListener('pointerout',function(e){var b=e.target.closest&&e.target.closest('.qa-dot');if(b&&!(e.relatedTarget&&b.contains(e.relatedTarget)))qaHideTip()});
  D.addEventListener('focusin',function(e){var b=e.target.closest&&e.target.closest('.qa-dot');if(b){try{if(b.matches(':focus-visible'))qaHint(b)}catch(_){}}});
  D.addEventListener('focusout',function(e){if(e.target.closest&&e.target.closest('.qa-dot'))qaHideTip()});
  addEventListener('scroll',qaHideTip,{passive:true});
}
function qaFromHash(delay){var id=location.hash&&decodeURIComponent(location.hash.slice(1)),el=id&&D.getElementById(id);if(!el)return;
  if(el.classList.contains('qa-pop'))setTimeout(function(){qaOpenId(id)},delay);
  else if(el.classList.contains('qa-note')){var d=el.querySelector('details');if(d){d.open=true;setTimeout(function(){el.scrollIntoView({block:'start'})},60)}}}
qaFromHash(reduce?60:420);
addEventListener('hashchange',function(){qaFromHash(0)});

/* ---- sidebar chapters: replay the staggered entrance whenever a chapter is opened ---- */
$$('.ml-side details').forEach(function(d){
  d.addEventListener('toggle',function(){
    if(!d.open||reduce)return;
    d.classList.remove('ml-anim');void d.offsetWidth;d.classList.add('ml-anim');
    clearTimeout(d._t);d._t=setTimeout(function(){d.classList.remove('ml-anim')},$$('li',d).length*60+600);
  });
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
var bar=$('.ml-progress i'),up=D.createElement('button'),down=D.createElement('button');
var ICON_DOWN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>';
up.className='ml-up';up.type='button';up.setAttribute('aria-label','回到頂端');up.innerHTML=window.ML_ICON_UP||'';body.appendChild(up);
down.className='ml-up ml-down';down.type='button';down.setAttribute('aria-label','到頁面底部');down.innerHTML=ICON_DOWN;body.appendChild(down);
function toEnd(){window.scrollTo({top:root.scrollHeight,behavior:reduce?'auto':'smooth'})}
up.addEventListener('click',function(){window.scrollTo({top:0,behavior:reduce?'auto':'smooth'})});
down.addEventListener('click',toEnd);
$$('.ml-toc .ml-totop').forEach(function(a){var e=D.createElement('a');e.className='ml-totop';e.href='#ml-end';e.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>到頁面底部';a.parentNode.insertBefore(e,a.nextSibling)});
var ticking=false;
function onScroll(){ticking=false;var h=root.scrollHeight-innerHeight,r=h>0?Math.min(1,scrollY/h):1;
  if(bar)bar.style.width=(r*100)+'%';up.classList.toggle('show',scrollY>700);
  down.classList.toggle('show',h-scrollY>700&&h>innerHeight);up.classList.toggle('lift',down.classList.contains('show'));
  if(PAGE&&r>0.92)markRead(PAGE)}
addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});
onScroll();

/* ---- wide tables that still scroll sideways: fade the edge that has more ---- */
var wides=$$('.scroll,.math,.strip-scroll,.digits');
function edge(el){var max=el.scrollWidth-el.clientWidth;el.classList.toggle('ml-more-r',max>2&&el.scrollLeft<max-2);el.classList.toggle('ml-more-l',max>2&&el.scrollLeft>2)}
function edges(){wides.forEach(edge)}
wides.forEach(function(el){el.addEventListener('scroll',function(){edge(el)},{passive:true});if(window.ResizeObserver&&el.firstElementChild)new ResizeObserver(function(){edge(el)}).observe(el.firstElementChild)});
edges();addEventListener('resize',edges);addEventListener('load',edges);
D.addEventListener('toggle',function(e){if(e.target.tagName==='DETAILS'&&e.target.open)edges()},true);

/* ---- scrollspy for the right rail ---- */
var links=$$('.ml-toc ol a[href^="#"]');
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
  dlg.innerHTML='<div class="ml-dlg-box"><div class="ml-dlg-in">'+(window.ML_ICON_SEARCH||'')+'<input type="search" placeholder="搜尋標題、小節或考古題，例如：ROC、梯度下降、Lasso" aria-label="搜尋關鍵字" autocomplete="off"></div><div class="ml-dlg-res" role="listbox"></div><div class="ml-dlg-hint">方向鍵選擇・Enter 開啟・Esc 關閉</div></div>';
  body.appendChild(dlg);inp=$('input',dlg);res=$('.ml-dlg-res',dlg);
  dlg.addEventListener('click',function(e){if(e.target===dlg)closeS()});
  inp.addEventListener('input',run);
  inp.addEventListener('keydown',function(e){
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!items.length)return;sel=(sel+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;paintSel()}
    else if(e.key==='Enter'){if(items[sel]){go(items[sel].getAttribute('href'));closeS()}}
    else if(e.key==='Escape'){closeS()}});
}
function run(){
  var q=inp.value.trim(),out=[];
  CAT.forEach(function(p){
    var pt=p.t+' '+p.s;
    if(!q||pt.toLowerCase().indexOf(q.toLowerCase())>=0)out.push({href:BASE+p.u,t:p.t,c:'第 '+p.ch+' 章 '+p.cn+'・第 '+p.i+' 篇',q:q,score:q?0:1});
    if(q)p.h.forEach(function(h){if(h[1].toLowerCase().indexOf(q.toLowerCase())>=0)out.push({href:BASE+p.u+'#'+h[0],t:h[1],c:'第 '+p.ch+' 章・'+p.t,q:q,score:1})});
  });
  if(!q||'考古題專區 期中考 期末考'.toLowerCase().indexOf(q.toLowerCase())>=0)out.push({href:BASE+'exams/index.html',t:'考古題專區',c:'所有考卷與觀念對照表',q:q,score:q?0:2});
  if(q)(window.ML_QA||[]).forEach(function(a){if(a[2].toLowerCase().indexOf(q.toLowerCase())>=0){var p=CAT.filter(function(c){return c.u===a[0]})[0];out.push({href:BASE+a[0]+'#'+a[1],t:a[2],c:(a[3]?'補充筆記':'讀者提問')+(p?'・第 '+p.ch+' 章・'+p.s:''),q:q,score:1})}});
  (window.ML_EXAMS||[]).forEach(function(x){
    var xt='考古題 '+x.t;
    if(!q||xt.toLowerCase().indexOf(q.toLowerCase())>=0)out.push({href:BASE+x.u,t:'考古題：'+x.t,c:'考古題專區',q:q,score:q?0:2});
    if(q)x.h.forEach(function(h){if((h[1]+' 考古題').toLowerCase().indexOf(q.toLowerCase())>=0)out.push({href:BASE+x.u+'#'+h[0],t:h[1],c:'考古題・'+x.t,q:q,score:1})});
  });
  out.sort(function(a,b){return a.score-b.score});out=out.slice(0,40);
  res.innerHTML=out.length?out.map(function(o){return '<a role="option" href="'+o.href+'">'+hl(o.t,o.q)+'<small>'+esc(o.c)+'</small></a>'}).join(''):'<div class="empty">找不到「'+esc(q)+'」，換個關鍵字試試。</div>';
  items=$$('a',res);sel=0;paintSel();items.forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();closeS();go(a.getAttribute('href'))})});
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
