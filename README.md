# 상품등록 페이지
## 방법

해당 폴더에서 깃bash 아래 코드를 입력합니다.
```javascript
npx create-react-app my-app
cd my-app
npm i -g json-server
```

설치후 db폴더를 만들고 db.json파일에 데이터를 저장합니다.
```javascript
{
    "product" : [
        {
        "id": 1,
        "productName": "버그를 Java라 버그잡는 개리씨 키링 개발자키링 금속키링",
        "price": 12500,
        "stockCount": 100,
        "thumbnailImg": "asset/img/1/thumbnailImg.jpg",
        "option": [
            
        ],
        "discountRate": 0,
        "shippingFee": 1500,
        "detailInfoImage": [
            "asset/detail/2/detail1.png",
            "asset/detail/2/detail2.png"
        ],
        "viewCount": 0,
        "pubDate": "2022-02-28",
        "modDate": "2022-02-28"
        },
        {
        "id": 2,
        "productName": "우당탕탕 라이캣의 실험실 스티커 팩",
        "price": 3500,
        "stockCount": 1000,
        "thumbnailImg": "asset/img/2/thumbnailImg.jpg",
        "option": [
            
        ],
        "discountRate": 0,
        "shippingFee": 1500,
        "detailInfoImage": [
            "asset/detail/2/detail1.png",
            "asset/detail/2/detail2.png"
        ],
        "viewCount": 0,
        "pubDate": "2022-02-28",
        "modDate": "2022-02-28"
        },
        {
        "id": 3,
        "productName": "딥러닝 개발자 무릎 담요",
        "price": 17500,
        "stockCount": 0,
        "thumbnailImg": "asset/img/3/thumbnailImg.jpg",
        "option": [
            
        ],
        "discountRate": 0,
        "shippingFee": 1500,
        "detailInfoImage": [
            "asset/detail/3/detail1.png",
            "asset/detail/3/detail2.png",
            "asset/detail/3/detail3.png"
        ],
        "viewCount": 0,
        "pubDate": "2022-02-28",
        "modDate": "2022-02-28"
        },
        {
        "id": 4,
        "productName": "네 개발잡니다 개발자키링 금속키링",
        "price": 13500,
        "stockCount": 100,
        "thumbnailImg": "asset/img/4/thumbnailImg.jpg",
        "option": [
            
        ],
        "discountRate": 0,
        "shippingFee": 1500,
        "detailInfoImage": [
            "asset/detail/4/detail1.png",
            "asset/detail/4/detail2.png"
        ],
        "viewCount": 0,
        "pubDate": "2022-02-28",
        "modDate": "2022-02-28"
        },
        {
        "id": 5,
        "productName": "Hack Your Life 개발자 노트북 파우치",
        "price": 36000,
        "stockCount": 230,
        "thumbnailImg": "asset/img/5/thumbnailImg.jpg",
        "option": [
            {
            "id": 1,
            "optionName": "13인치",
            "additionalFee": 0
            },
            {
            "id": 2,
            "optionName": "15인치",
            "additionalFee": 1000
            }
        ],
        "discountRate": 19,
        "shippingFee": 1500,
        "detailInfoImage": [
            "asset/detail/5/detail1.png",
            "asset/detail/5/detail2.png"
        ],
        "viewCount": 0,
        "pubDate": "2022-02-28",
        "modDate": "2022-02-28"
        },
        {
        "id": 6,
        "productName": "[NEW] 위니브 개발자, 캐릭터 스티커팩 2종",
        "price": 5500,
        "stockCount": 1000,
        "thumbnailImg": "asset/img/6/thumbnailImg.jpg",
        "option": [
            {
            "id": 1,
            "optionName": "위니브 개발자 스티커팩",
            "additionalFee": 0
            },
            {
            "id": 2,
            "optionName": "위니브 프랜즈 스티커팩",
            "additionalFee": 0
            },
            {
            "id": 3,
            "optionName": "스티커팩 세트(개발자+프렌즈)",
            "additionalFee": 5000
            }
        ],
        "discountRate": 0,
        "shippingFee": 1500,
        "detailInfoImage": [
            "asset/detail/6/detail1.png",
            "asset/detail/6/detail2.png",
            "asset/detail/6/detail3.png",
            "asset/detail/6/detail4.png",
            "asset/detail/6/detail5.png"
        ],
        "viewCount": 0,
        "pubDate": "2022-02-28",
        "modDate": "2022-02-28"
        },
        {
        "id": 7,
        "productName": "제주코딩베이스캠프 코딩 연습장 세트",
        "price": 8000,
        "stockCount": 1000,
        "thumbnailImg": "asset/img/7/thumbnailImg.jpg",
        "option": [
            
        ],
        "discountRate": 0,
        "shippingFee": 1500,
        "detailInfoImage": [
            "asset/detail/7/detail1.png",
            "asset/detail/7/detail2.png"
        ],
        "viewCount": 0,
        "pubDate": "2022-02-28",
        "modDate": "2022-02-28"
        }
    ]
}
```

db폴더에서 아래 코드를 실행합니다
```javascript
json-server --watch db.json --port 3001
```

## 상품등록페이지 기능
* 상품 등록하기: 상품 이름, 가격, 재고, 날짜를 입력하여 상품을 등록한다.
* 상품 불러오기: 등록된 상품을 화면에 불러온다.
* 상품 수정하기: 수정하고 싶은 상품에서 수정및삭제하기를 누르면 등장하는 모달창에 수정내용을 입력한뒤 수정버튼을 누르면 상품이 수정된다.
* 상품 삭제하기: 삭제하고 싶은 상품에서 수정및삭제하기를 누르면 등장하는 모달창에서 삭제 버튼을 누르면 상품이 삭제된다.
