export const TETROMINOS={
    0:{shape:[[0]],color:'0,0,0'},
    1:{
        shape:[
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0]
        ],
        color:'80,227,230',
    },
    2:{
        shape:[
            [0,2,0],
            [0,2,0],
            [2,2,0]
        ],
        color:'36,95,223',
    },
    3:{
        shape:[
            [0,3,0],
            [0,3,0],
            [0,3,3]
        ],
        color:'223,173,36',
    },
    4:{
        shape:[
            [4,4],
            [4,4]
        ],
        color:'223,217,36',
    },
    5:{
        shape:[
            [0,5,5],
            [5,5,0],
            [0,0,0]
        ],
        color:'48,211,56',
    },
    6:{
        shape:[
            [0,0,0],
            [6,6,6],
            [0,6,0]
        ],
        color:'132,61,198',
    },
    7:{
        shape:[
            [7,7,0],
            [0,7,7],
            [0,0,0]
        ],
        color:'227,78,78',
    },
}

export const randomTetromino = () =>{
    const tetrominos = [1, 2, 3, 4, 5, 6, 7]; // Numeric keys for I, J, L, O, S, T, Z
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino] || TETROMINOS[1]; // Fallback to I piece (key 1) if undefined
}