# 機器學習互動講義

Hands-On Machine Learning 第 2–5 章：用互動實驗學懂機器學習。

這是依據課程投影片與 Aurélien Géron《Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow》第 2–5 章整理的繁體中文互動講義，共 26 篇。每一篇都有可操作的實驗、完整的推導，以及實際執行過的 Python 程式（第 2–4 章：NumPy 2.4、scikit-learn 1.8；第 5 章：NumPy 2.5、scikit-learn 1.9）。

## 線上閱讀

開啟 GitHub Pages 後，網址是 `https://<帳號>.github.io/<repo 名稱>/`。

## 目錄

### 第 2 章 完整的機器學習專案（End-to-End Machine Learning Project）
1. [先看清全局：這個模型要替誰做什麼？](ch2/01-big-picture.html)
2. [取得資料，然後立刻把一部分鎖起來](ch2/02-get-data.html)
3. [探索資料：先用眼睛，再用相關係數](ch2/03-explore.html)
4. [準備資料：把資料整理成模型吃得下的樣子](ch2/04-prepare.html)
5. [選模型與訓練：別被訓練集的分數騙了](ch2/05-train.html)
6. [微調、測試、上線：最後一哩路](ch2/06-tune-launch.html)

### 第 3 章 分類（Classification）
1. [MNIST 與 5 偵測器：準確率 95%，真的很厲害嗎？](ch3/01-mnist-binary.html)
2. [混淆矩陣：把「猜對幾張」拆成四個格子](ch3/02-confusion-f1.html)
3. [門檻與 PR 曲線：魚與熊掌怎麼選](ch3/03-threshold-pr.html)
4. [ROC 曲線：AUC 0.96 為什麼還不夠好](ch3/04-roc-imbalanced.html)
5. [多類別分類：十個數字，怎麼用二元分類器來分？](ch3/05-multiclass.html)
6. [多類別指標與多標籤：一個分數，三種平均法](ch3/06-averaging-multilabel.html)

### 第 4 章 訓練模型（Training Models）
1. [線性迴歸與正規方程式：一個公式直接算出最佳直線](ch4/01-linear-normal-equation.html)
2. [梯度下降：蒙著眼睛，一步一步走下山](ch4/02-gradient-descent.html)
3. [隨機與小批次梯度下降：每次只看一部分資料](ch4/03-sgd-minibatch.html)
4. [多項式迴歸與學習曲線：模型太簡單，還是太複雜？](ch4/04-poly-learning-curves.html)
5. [正則化：替模型的權重加上限制](ch4/05-regularization.html)
6. [邏輯迴歸：用迴歸來做分類](ch4/06-logistic.html)
7. [Softmax 迴歸：一次分好幾類](ch4/07-softmax.html)

### 第 5 章 支援向量機（Support Vector Machines）
1. [線性 SVM：找出最寬的街道](ch5/01-linear-svm.html)
2. [軟間隔與超參數 C：街道寬一點，還是違規少一點？](ch5/02-soft-margin.html)
3. [多項式特徵與多項式核：把資料搬到更高的維度](ch5/03-poly-kernel.html)
4. [相似度特徵與高斯 RBF 核](ch5/04-rbf-kernel.html)
5. [SVM 迴歸：讓資料盡量落在街道上](ch5/05-svm-regression.html)
6. [SVM 背後的數學（一）：從超平面到硬間隔](ch5/06-hard-margin-math.html)
7. [SVM 背後的數學（二）：軟間隔、hinge loss 與梯度下降](ch5/07-soft-margin-math.html)

### 考古題
- [考古題專區](exams/index.html)：每題附原始題目、中文題意，以及先藏起來的兩份解答（學長姊的手寫參考答案＋批改註記、Claude 的詳解），詳解會連回講義對應的小節
- [2024 期中考](exams/2024-midterm.html)：8 大題，涵蓋第 2–4 章
- [2024 期末考](exams/2024-final.html)：10 大題，涵蓋第 5–9 章（SVM、決策樹、集成學習、降維、非監督式學習）；第 5 章的觀念已連到講義，第 6–9 章的講義製作中
- [2023 期末考](exams/2023-final.html)：8 大題，涵蓋第 5–9 章；只有題目，5 題和 2024 期末考相同

## 檔案結構

- `index.html`：首頁
- `ch2/`、`ch3/`、`ch4/`、`ch5/`：各章講義，每一篇都是單一 HTML 檔（公式已預先轉成 SVG，資料內嵌），不需要建置步驟
- 第 4 章各篇在相關句子後面有一個小問號，點一下會浮出「讀者提問」卡片（讀者實際問過的問題，附條列式解答），不佔正文版面；打開過的問號會變淡（只記在讀者自己的瀏覽器），複習時一眼看出哪幾題看過了；先備知識放在可展開的「補充筆記」
- 第 5 章還沒有讀者提問，延伸的說明都放在段落後面可展開的「補充筆記」，之後收到讀者的問題再加上小問號
- `exams/`：考古題專區；`exams/img/` 是從考卷與手寫答案裁切下來的圖片
- `404.html`、`favicon.svg`、`.nojekyll`

## 授權

內容以 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.zh-hant) 授權。本專案與原書作者及出版社無關；書中範例程式以 Apache 2.0 授權釋出。
