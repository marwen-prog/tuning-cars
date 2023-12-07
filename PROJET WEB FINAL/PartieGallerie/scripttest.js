const btns=[
    /*{
        id: 1,
        name: 'BMW E30 PHASE 2'
    },*/
    {
        id: 2,
        name: 'BMW E36 COUPE'
    },
    {
        id: 3,
        name: 'BMW SERIE 3 E46'
    },
    /*{
        id: 4,
        name: 'BMW SERIE 3 E90'
    },
    {
        id: 5,
        name: 'BMW X5'
    },
    {
        id: 6,
        name: 'MERCEDES ML W163'
    },*/
    {
        id: 7,
        name: 'MERCEDES CLASSE E W211'
    },
    /*{
        id: 8,
        name: 'MERCEDES CLS W219'
    },
    {
        id: 9,
        name: ' VOLkSWAGEN GOLF V'
    },*/
    {
        id: 10,
        name: 'vOLSkWAGEN GOLF VI'
    },
    ]
    
    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]
    
    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
            )
    }).join('');
    
    const product = [
    /*{
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMCg5kYJpZKqLZnZakaC_wSoM4TxIZjK-YU9Wfpu-Gw&s',
        title: 'E30 PHASE 3',
        alt: 'm power v8  700hours power' ,
        category: 'E30 PHASE 3'
    },*/
    {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGPQ-KFM6T6khDIVIMI4CtnRLZnegGTAU0g&usqp=CAU',
        title: 'BMW X5',
        alt: 'm power v8  700hours power' ,
        category: 'BMW X5'
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRHrq-auze3nORwZSPM-EMzNe7dzb8rOYpA&usqp=CAU',
        title: 'BMW SERIE 3 E46',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E46'
    },
    /*{
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGd5btqWQ-9jtYPEHtQ5MJYip3BHY9Kp3hCA&usqp=CAU',
        title: 'E30 PHASE 3',
        alt: 'm power v8  700hours power' ,
        category: 'E30 PHASE 3'
    },*/
    /*{
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZb8vXCCR_wFQWmqP0rB42p-BlrkysTfD_w&usqp=CAU',
        title: 'BMW X5',
        price: 65,
        category: 'BMW X5'
    },*/
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRaT6CYxVD30q_oEguXHuML2jj1JNeyTaFBw&usqp=CAU',
        title: 'BMW SERIE 3 E46',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E46'
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlds_YtgoQHxNcsXcrqRq5oi2P17W-a5V8kw&usqp=CAU',
        title: 'BMW SERIE 3 E46',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E46'
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQ1_PbGFrNjRhEGnRQMr-zhQ0sJD5HB5MBw&usqp=CAU',
        title: 'BMW SERIE 3 E46',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E46'
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8AgG78vBaMqBniPFycOzO-No-rNLN7U8qFg&usqp=CAU',
        title: 'BMW SERIE 3 E46',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E46'
    },
    /*{
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SVDk9CGUhMX0PaVa3nN6hz6hkkny1uAwcg&usqp=CAU',
        title: 'BMW SERIE 3 E90',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E90'
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3S3_zgG481MBP_LY9w_mlJ-yKoPvd9vusg&usqp=CAU',
        title: 'BMW SERIE 3 E90',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E90'
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObmKR7K3RVo_JqUkRXoogM2sqO_9T3pRQ7w&usqp=CAU',
        title: 'BMW SERIE 3 E90',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E90'
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelT4ovnW_2bl6So85Faf3Z08iB3EEK2HxEA&usqp=CAU',
        title: 'BMW SERIE 3 E90',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E90'
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3nZqEafUGgOAS30XqcHCj1lf2ZmZgLaVj6A&usqp=CAU',
        title: 'BMW SERIE 3 E90',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E90'
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpU34EXYwVBbgSa1yXOijfcdXcpTH6qNpBMA&usqp=CAU',
        title: 'BMW SERIE 3 E90',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E90'
    },*/
    /*{
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYeZ0U0m6q-RXkW4X0DSwz7sK8a0fMcIds_A&usqp=CAU',
        title: 'E30 PHASE 2',
        alt: 'm power v8  700hours power' ,
        categories:'E30 PHASE 2'
    },*/
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlds_YtgoQHxNcsXcrqRq5oi2P17W-a5V8kw&usqp=CAU',
        title: 'BMW SERIE 3 E46',
        alt: 'm power v8  700hours power' ,
        category: 'BMW SERIE 3 E46'
    },
    /*{
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjYF2si_JZetilnmYsbktOLTcYX-aT27FPA&usqp=CAU',
        title: 'BMW X5',
        alt: 'm power v8  700hours power' ,
        category: 'BMW X5'
    },
    {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfud9iA2FqmxwqOuJDkKS1R4aM3k27Ql3YMg&usqp=CAU',
        title: 'BMW X5',
        alt: 'm power v8  700hours power' ,
        category: 'BMW X5'
    },
    {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnh0eEGQtpsmj-EAN-9d2P9q69v3_irmGLzg&usqp=CAU',
        title: 'BMW X5',
        alt: 'm power v8  700hours power' ,
        category: 'BMW X5'
    },
    {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnh0eEGQtpsmj-EAN-9d2P9q69v3_irmGLzg&usqp=CAU',
        title: 'BMW X5',
        alt: 'm power v8  700hours power' ,
        category: 'BMW X5'
    },*/
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTze9GEtUN9FGgbqZFg3NPVM06iiRTPALU_2Q&usqp=CAU',
        title: 'BMW E36 COUPE',
        alt: 'm power v8  700hours power' ,
        category: 'BMW E36 COUPE'
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan_YPOFa3mQJsrwWblvSYgazg5enzoA7_cQ&usqp=CAU',
        title: 'BMW E36 COUPE',
        alt: 'm power v8  700hours power' ,
        category: 'BMW E36 COUPE'
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVKoeehh9BGzi4F0k3mExmHLxwKVtdpd30A&usqp=CAU',
        title: 'BMW E36 COUPE',
        alt: 'm power v8  700hours power' ,
        category: 'BMW E36 COUPE'
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJRS7ksyjcvpUWkZHRz2fSUmWDBa9D3qLsQ&usqp=CAU',
        title: 'BMW E36 COUPE',
        alt: 'm power v8  700hours power' ,
        category: 'BMW E36 COUPE'
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrNAQFkUznL9R0eRLvfFsSjgppsRd-N318Q&usqp=CAU',
        title: 'BMW E36 COUPE',
        alt: 'm power v8  700hours power' ,
        category: 'BMW E36 COUPE'
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA38TNXfp795pIi5JsJ5w_Pjr8vFOxu2lWag&usqp=CAU',
        title: 'BMW E36 COUPE',
        alt: 'm power v8  700hours power' ,
        category: 'BMW E36 COUPE'
    },
    /*{
        id: 6,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluQnL6uTu8aINFI9eADTGijmZFIuX1u8kQw&usqp=CAU',
        title: 'MERCEDES ML W163',
        alt: 'brabus style v8' ,
        category: 'MERCEDES ML W163'
    },
    {
        id: 6,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigQn0CNlROFpM6Ay42CxcEbCdDKA_LJRwoQ&usqp=CAU',
        title: 'MERCEDES ML W163',
        alt: 'brabus style v8' ,
        category: 'MERCEDES ML W163'
    },
    {
        id: 6,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRKBQ6Id-iIo8wXJVUpLjRYMMz-RYt8Jdmg&usqp=CAU',
        title: 'MERCEDES ML W163',
        alt: 'brabus style v8' ,
        category: 'MERCEDES ML W163'
    },*/
    {
        id: 7,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvYH1tkxVzxQ09OO-Ua4f2dZ8xiLKI1JhUA&usqp=CAU',
        title: 'MERCEDES CLASSE E  W219',
        alt: 'kit AMG m113 kompressor  700hours power' ,
        category: 'MERCEDES CLASSE E  W219'
    },
    {
        id: 7,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKJ0Q6BLAtADGyEzltXKcK4QY4pODRpm_FA&usqp=CAU',
        title: 'MERCEDES CLASSE E  W219',
        alt: 'kit AMG m113 kompressor  700hours power' ,
        category: 'MERCEDES CLASSE E  W219'
    },
    {
        id: 7,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFY7wVNGIJ7ujjNQPAg-AoWIlv4VNsJAETZA&usqp=CAU',
        title: 'MERCEDES CLASSE E  W219',
        alt: 'kit AMG m113 kompressor  700hours power' ,
        category: 'MERCEDES CLASSE E  W219'
    },
    /*{
        id: 8,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9AkfcycnsLnt_wKRsZq9Z0AY1sbrsQ0XUw&usqp=CAU',
        title: 'MERCEDES CLS W219',
        alt: 'black series kit AMG V8 500HP' ,
        category: 'MERCEDES CLS W219'
    },
    {
        id: 8,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiorymZsMQKdzTD8BGp5ef-7EK9TXgZuev0w&usqp=CAU',
        title: 'MERCEDES CLS W219',
        alt: 'black series kit AMG V8 500HP' ,
        category: 'MERCEDES CLS W219'
    },
    {
        id: 8,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWO3wCbXVHcB1GjuprADvz5oInvlk-mvFrw&usqp=CAU',
        title: 'MERCEDES CLS W219',
        alt: 'black series kit AMG V8 500HP ' ,
        category: 'MERCEDES CLS W219'
    },
    {
        id: 9,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqKFk-lR90T6VNInrfpETKgGQihizD-vpLQ0l10aoM0Qrs9m2GGa8MoKTQrnVNjhFBeY&usqp=CAU',
        title: 'GOLF V',
        alt: 'kit R line 420horse_power' ,
        category: 'GOLF V'
    },
    {
        id: 9,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMCg5kYJpZKqLZnZakaC_wSoM4TxIZjK-YU9Wfpu-Gw&s',
        title: 'GOLF V3',
        alt: 'kit R line 420horse_power' ,
        category: 'GOLF V'
    },
    {
        id: 9,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTp4xVWAvT46lA34Gtp5L84IUKuv-YrD0ghQ&usqp=CAU',
        title: 'GOLF V',
        alt: 'kit R line 420horse_power' ,
        category: 'GOLF V'
    },*/
    {
        id: 10,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5C8ueXceLZXuO5ZVwe2LYfWV3I68QDBW6A&usqp=CAU',
        title: 'GOLF VI',
        alt: 'kit R line 420horse_power' ,
        category: 'GOLF VI'
    },
    {
        id: 10,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9qGWc5U1BYIL73GkoGzgPQsvC98XbYkkQL1vPFsdzyp1Muy7Y7ckE7D18VJbNmepe2U&usqp=CAU',
        title: 'GOLF VI',
        alt: 'kit R line 420horse_power' ,
        category: 'GOLF VI'
    },
    {
        id: 10,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtP9jXTWz9OT8SpD2NFFSOoA0r36W004tTZA&usqp=CAU',
        title: 'GOLF VI',
        alt: 'kit R line 420horse_power' ,
        category: 'GOLF VI'
    },

    

    ];
    
    const categories = [...new Set(product.map((item)=>
        {return item}))]
    
    const filterItems = (a)=>{
        const flterCategories = categories.filter(item);
        function item(value){
            if(value.id==a){
                return(
                    value.id
                    )
            }
        }
        displayItem(flterCategories)
    }
    
    
    const displayItem = (items) => {
        document.getElementById('root').innerHTML = items.map((item)=>
        {
            var {image, title, alt} = item;
            return(
                `<div class='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                <img class="image" src="${image}" alt="${title}">
                </div>
                <div class='bottom'>
                <p>${alt}</p>
                <button>voir plus</button>
                </div>
                </div>`)
        }).join('');
    }
    displayItem(categories);

