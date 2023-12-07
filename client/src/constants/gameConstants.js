export const GameStates = {
    WAITING_FOR_PLAYERS: 'WAITING_FOR_PLAYERS',
    CHOOSING_CAPITAL: 'CHOOSING_CAPITAL',
    EXPANSION: 'EXPANSION',
    FIGHT: 'FIGHT',
    FINISHED: 'FINISHED',
};

export const counties = [
    'gyor-moson-sopron', 'vas', 'veszprem', 'komarom-esztergom', 'zala', 
    'somogy', 'fejer', 'pest', 'baranya', 'tolna', 'bacs-kiskun', 'nograd', 
    'heves', 'jasz-nagykun-szolnok', 'csongrad-csanad', 'borsod-abauj-zemplen', 
    'bekes', 'hajdu-bihar', 'szabolcs-szatmar-bereg'
];

export const initialCountyClassNames = counties.reduce((acc, county) => {
    acc[county] = 'Empty';
    return acc;
}, {});

export const countyPaths = {
    'gyor-moson-sopron': 'M338.783,242.058c-5.212-5.567-17.669,2.35-27.977-2-9.391-3.963-9.509-12.436-20.983-16.992-2.911-1.156-5.032-.975-7.993-2-14.624-5.061-28.459-32.174-30.974-34.983-13.592-15.179-25.151-19.965-34.971-18.991-3.263.323-12.828,1.916-16.986,9s1.062,12.8-3,19.991c-2.9,5.126-9.672,6.227-10.991,11.994-0.858,3.751.981,7,2,9,4.7,9.21,8.592,24.512,3,29.985a8.168,8.168,0,0,1-4,2c-17.12,4.5-28.286,4.648-31.973,1-1.357-1.343-2.491-3.215-4-3-1.7.244-2.646,3.642-4,5-4.142,4.158-13.209,3.991-16.986,0-2.216-2.342-1.845-5.682-3-8-1.088-2.186-6.5-6.454-14.988-9-7.443-2.23-14.515-3.547-15.987-1-0.488.844-.043,1.645,0,3,0.1,3.206-2.2,6.229-4,8-3,2.951-8.309,4.418-10.991,6-2.646,1.558-3.941,2.883-4,4-0.115,2.3,3.219,4.618,8.993,7,7.88,3.248,14.7,3.174,22.981,7a18.659,18.659,0,0,1,5.995,4c2.748,2.854,5.7,9.5,5,19.99-0.595,8.851-3.631,15.187-6,17.992-4.618,5.478-13.335,7.82-12.989,10,0.189,1.186,2.618,1.768,4,2,10.9,1.821,22.312-2.61,31.974-2,11.015,0.7,16.79,9.216,27.976,7,10.473-2.077,17.977-13.778,20.983-11.994,0.6,0.359.87,1.774,1,4,0.315,5.394-.4,9.138,1,10,1.693,1.036,4.73-2.327,9.992-5a33.1,33.1,0,0,1,8.993-3c10.369-1.9,18.28,3.675,27.977,0,2.874-1.089,7.874-3.645,10.991-8,1.281-1.789,2.555-4.184,4-4,1.353,0.175,1.821,2.488,3,5,1.821,3.883,5.731,8.925,9.992,8.995,3.236,0.054,5.073-2.787,7.993-5,4.457-3.374,11.5-3.083,21.982-3,10.766,0.086,17.175-.023,20.983,4a15.6,15.6,0,0,1,4,12.994c-1.141,6.342-6.345,7.99-7.993,14.993a14.637,14.637,0,0,0,0,7c0.9,3.585,3.364,7.323,5,7,1.043-.208,1.155-1.959,2-4,2.129-5.146,9.59-8.66,11.99-11a29.257,29.257,0,0,0,6.994-10,33.311,33.311,0,0,0,2-10c0.254-9.137,3.132-17.559,4-27.987,1.468-17.717-4.388-27.713-1-43.979C340.49,251.654,342.027,245.522,338.783,242.058Zm-152.874,7c-17.12,4.5-28.286,4.648-31.973,1',
    'vas': 'M206.647,321.99c-2.393-1.574-5.9-.776-8,0-4.976,1.836-7.48,7.984-12.007,7.988a3.748,3.748,0,0,1-3-1c-2.478-2.851,3.513-10.091,1-12.981a3.64,3.64,0,0,0-3-1c-3.231.3-5.08,5.765-8,7.988a15.6,15.6,0,0,1-9.006,3c-5.366.078-8.121-2.957-13.007-4.993-2.815-1.172-9.988-2.249-18.011-1-3.252.507-16.768,7.091-23.013,3.994-3.08-1.527-4.951-6.137-8-5.991-3.3.157-4.266,5.294-8,6.989-5.5,2.492-10.116-2.688-16.009,0a10.47,10.47,0,0,0-5,4.993c-1.521,3.24-.878,6.731,1,11.983,1.964,5.49,3.883,9.059,4,13.979,0.129,5.339-1.363,8.457-3,9.986-1.807,1.685-3.233,1.329-5,3-3.693,3.478-3.637,10.836-1,15.977a15.822,15.822,0,0,0,7,6.99c3.035,1.461,8,.973,9.005,3,1,2.006-1.2,5.744-4,7.988-2.356,1.889-6.986,2.429-8,4.993a5.51,5.51,0,0,0,1,4.992c2.052,2.711,6.307,2.052,7,3.995,0.615,1.712-1.88,4.631-7,8.986-2.428,2.065-4.3,3.51-4,4.993,0.579,2.891,9.039,3.177,9.005,3.994-0.017.421-2.349,1-7,1-9.942,0-19.827-1.179-27.016,0-21.71,3.562-38.81,28.159-35.021,33.95,0.713,1.09,4.843,1.439,11.007,1,10-.715,17.366-3.036,22.013,1a9.607,9.607,0,0,1,3,4.992c0.693,3.026-.46,5.558-1,6.99-2.558,6.771-1.681,16.1,3,20.97,2.344,2.437,5.809,3.975,7,3,1.5-1.227-1.582-5.921,0-9.985a10.606,10.606,0,0,1,7-5.992c3.41-.89,5.322,1.159,8,0,4.715-2.036,3.154-10.091,8-12.981,3.615-2.153,8.6.682,11.006-2,1.237-1.375.853-3.09,1-4.992,0.587-7.575,9.631-15.468,18.01-16.976,7.031-1.265,13.446,4.152,19.012,1,4.232-2.4,4.124-8.17,9-9.986a9.875,9.875,0,0,1,6,0c11.833,2.77,19.292,2.037,23.014-1,3.462-2.823,3.437-7.342,6-10.984,1.964-2.788,5.587-5.083,10-7.989,4.771-3.137,9.116-6.354,12.008-6.989,4.062-.893,12.434,1.079,15.008-2,1.378-1.647,1.122-3.925,1-4.993-2.352-20.8-2.88-36.223,2-44.935,1.286-2.295,8.433-10.089,10.006-16.975a9.043,9.043,0,0,0,0-4.993c-1.514-4.705-7.227-5.158-10.006-8.987C208.273,331.316,210.566,324.567,206.647,321.99Z',
    'veszprem': 'M205.105,322.971c-2.295,3.671,2.313,12.544,8.991,17.963,4.43,3.6,9.025,5.087,8.99,7.984-0.022,1.871-1.954,3.184-3,3.992-1.774,1.374-5.255,6.9-7.991,12.973-1.949,4.324-4.259,15.513-3,27.943,1.185,11.677,4.433,19.912,0,23.951-1.82,1.658-4.053,1.839-5.994,2-9.973.8-16.186,1.87-16.982,3.992-0.956,2.548,3.231,7.245,7.992,9.979,5.668,3.255,15.047,2.322,17.981,6.986a13.793,13.793,0,0,1,1,4.989c0.206,4.5-2.332,8.017-1,10.978,1.987,4.416,9.738,3.545,13.985,7.984,2.67,2.789,3.227,5.963,4,9.979,0.866,4.518,1.976,9.42,3,12.973,3.487,12.138,8.14,17.611,12.986,18.962a11.742,11.742,0,0,0,5.994,0c11.289-2.608,39.524-17.006,49.948-20.957,11.154-4.229,18.136-4.592,26.972-11.976,3.03-2.532,7.029-5.122,10.989-7.983,7.8-5.641,20.443-12.4,24.974-12.974,6.977-.877,11.76,2.486,20.978-1,2.351-.889,4.367-0.083,5.994-2,4.182-4.919,2.291-10.772,2-13.971-1.213-13.2,2.679-22.675,2-36.924-0.209-4.379-.745-10.665-4.994-16.965-4.029-5.973-8.07-8.839-11.988-9.98-2.444-.711-6.723.068-8.991-2-4.828-4.4-1.276-11.259-5.993-15.967-3.611-3.6-8.522-3.234-13.986-5.988-6.489-3.27-5.09-9.789-9.989-9.979a10.2,10.2,0,0,0-7.992,2.993c-3.13,3.451-10.306,8.468-11.988,10.978-3.4,5.07-3.032,8.426-6.992,8.982-1.527.214-2.432-2.944-4-3.992-2.729-1.829-3.825-5.866-3-8.982,1.368-5.15,4.547-6.677,6.993-11.975,1.955-4.236,2.04-7.658,1-9.98-1.007-2.243-3.856-5.282-6.648-7.3-4.02-2.912-12.794-2.449-23.321-1.676-10.55.773-15.177,2.081-16.982,3.991-0.761.8-2.473,2.827-5,2.994-2.361.157-4.772-1.395-6.993-3.992a28.576,28.576,0,0,1-4-6.985c-1.189-2.549-1.935-3.94-3-3.992-1.658-.082-4.284,5.162-4.994,5.988-1.887,2.194-5.365,4.565-10.989,5.987-5.549,1.4-10.355.137-16.982,0C209.467,320.86,205.959,321.606,205.105,322.971Z',
    'komarom-esztergom': 'M338.754,240.979c4.7-5.169,14.316-2.319,26.034-1,5.089,0.572,16.049-.078,25.033,0,14.511,0.126,30.795-.621,42.055,0a169.508,169.508,0,0,0,26.034-1c13.108-1.749,25.533-5.458,29.039-8.018,3.564-2.6,7.549-6.353,14.018-8.017,6.769-1.742,11.593-.8,15.02,1,9.084,4.78,9.959,18.671,10.013,22.048,0.026,1.607-.159,3.782-1,4.009-0.75.2-1.708-1.477-3-2a6.571,6.571,0,0,0-7.009,2c-2.915,3.74,1.742,9.907-1,13.029-2.124,2.416-7.245.528-11.014,2-4.136,1.62-5.6,4.971-9.012,10.022-3.575,5.3-8.072,9.9-10.013,11.024-2.461,1.428-9.754,3.323-18.024,3.007-4.586-.175-9.033-0.821-13.017,2a13.463,13.463,0,0,0-5.007,7.016c-1.105,3.758.866,7.242-1,10.022-1.95,2.9-9.147,3.279-11.015,4.009-6.029,2.354-9.567,5.385-11.014,9.019-0.423,1.062-.838,5.312-3,8.018a8.986,8.986,0,0,1-4,3.007c-4.234,1.488-9.237-.975-12.016-4.009-2.562-2.8-2.161-5.22-5.007-8.018-2.968-2.918-7.733-4.606-10.013-3.006-1.131.793-.952,1.956-2,3.006-1.588,1.589-5.105,1.683-6.007,2a11.161,11.161,0,0,0-6.008,5.011c-1.327,2.492-.807,4.446-1,7.015-0.431,5.7-4.373,12.783-11.014,15.033-5.6,1.9-12.455.132-16.021-4.009-2.2-2.56-1.474-4.581-4-7.015-2.548-2.45-6.333-2.162-8.011-5.011-1.546-2.625-.35-5.956,0-7.016,0.214-.648,1.158-19.6,2-32.07,0.836-12.343,1.116-26.126,0-32.071C337.207,253.788,334.484,245.679,338.754,240.979Z',
    'zala': 'M184.735,425c-4.938-.359-10.325,4.11-13.018,8.986-1.115,2.02-2.93,6.787-6.008,8.986a9.514,9.514,0,0,1-8.01,2c-6.219-.851-10.845-2.1-15.02-1-3.328.875-6.083,3.5-10.013,5.991-3.638,2.3-6.914,3.831-9.012,3.994-5.023.388-7.359-2.483-12.016-2-3.671.383-8.149,2.445-13.017,7.987-4.735,5.39-6.776,9.467-11.014,12.98-2.85,2.362-5.736,1.44-8.011,3.993-2.616,2.938-1.879,5.858-4.005,8.986a14.365,14.365,0,0,1-9.012,5.991c-3.533.614-7.648-1.72-10.013,0-1.8,1.31-1.538,3.837-1.7,8.021-0.211,5.294-1.662,8.814-.3,12.946,1.326,4.02,3.643,4.978,5.007,8.986,1.829,5.376-.666,7.8,1,12.98,1.916,5.952,6.672,7.525,12.016,12.979A43,43,0,0,1,81.6,561.785c1.647,4.134,2.369,7.784,6.008,10.983,4.735,4.163,9.245,2.84,14.018,5.991,5.976,3.944,6.829,10.359,11.015,14.976a38.3,38.3,0,0,0,16.021,9.984c4.945,1.681,9.256,2.086,12.016,5.991,2.558,3.62,1.331,8.731,5.006,11.981,0.713,0.63,2.115,2.19,4,2,4.864-.5,14.644.3,22.029-3.994,2.238-1.3,2.666-4.5,3-6.989,0.679-4.991-1.826-8.5,0-11.981,0.815-1.555,2.863-4.131,8.011-4.992,2.429-.406,10.378.031,13.017-3,3.726-4.273,5.695-7.38,9.012-13.978,3.128-6.223,3.686-13.953,4-17.972,0.554-6.964-.6-12.01,0-18.97,0.8-9.282,4.046-17.23,6.008-19.969,2.888-4.032,8.389-9.651,16.021-11.981,6.353-1.939,11.726-1.023,13.017-3.994,0.4-.926.151-2.629-1-4.992a33,33,0,0,0-4-5.991,27.868,27.868,0,0,1-7.01-13.978c-0.575-3.081.632-9.372-2-13.978-1.711-2.991-5.207-4.843-9.012-7.987-3.226-2.666-5.368-5-6.008-6.989-1.233-3.826,1.11-8.035-1-10.983-1.644-2.3-4.618-2.185-8.011-3a30.933,30.933,0,0,1-11.014-5.991C190.413,428.475,188.658,425.285,184.735,425Z', 
    'somogy': 'M391.907,457.061c-1.6-1.94-7.963-4.57-16.994-5a42.9,42.9,0,0,0-12,1c-4.4,1.037-11.82,4.315-18.993,10-2.993,2.372-4.946,4.7-8,7-6.859,5.162-15.31,7.895-18.993,9-6.425,1.925-15.4,5.813-23.991,10-12.827,6.246-20.531,7.454-30.988,14-4.45,2.784-9.208,1.962-16.994,4a41.481,41.481,0,0,0-6,2c-5.187,2.228-8.612.764-13,3-4.12,2.1-4.44,6.853-8,10-4.094,3.619-9.19,9.654-9,16,0.294,9.672.7,14.355,0,23-0.292,3.584-.83,9.029-3,14-3.986,9.128-8.6,16.882-11,18-5.593,2.6-9.42-.434-16.993,2-2.393.769-2.488,4.009-3,5-2.94,5.69,1.37,10.254-1,16-2.174,5.27-7.723,7.438-11,8-6.5,1.113-14.245-2.729-16.993,0a4.088,4.088,0,0,0-1,3c-0.069,4.978,7.115,9.534,9,11,8.551,6.655,12.523,11.039,20.992,16,6.286,3.68,12.843,4.685,16.993,9,4.367,4.537,7.157,12.466,9,15,4.33,5.954,8.564,8.483,11.995,15,3.39,6.435,4.527,11.275,9,18,4.112,6.184,8.6,9.885,13,12,7.221,3.468,13.708,1.895,22.991,3,8.468,1.008,14.9,3.566,17.994,6,3.116,2.451,5.836,6.27,9,11,3.719,5.563,5.792,8.76,9,9,4.52,0.336,9.763-4.907,10-10,0.1-2.114-3.046-7.607-10-13-2.4-1.863-3.447-3.949-5-6-5.136-6.789-3.658-15.24-2.239-21.869,4.456-20.822,6.877-32.309,13.235-44.117a7.759,7.759,0,0,1,6-4c7.089-.548,9.955.766,15.994-1,5.794-1.695,14.722-1.755,16.994-7,1.567-3.616-.144-5.465,2-9,1.147-1.89,2.382-6.03,7-6a146.314,146.314,0,0,1,20.992,2c2.195,0.342,4.176,1.826,5,1,1.264-1.273-2.466-5.5-4-10-2.267-6.663-2.821-11.844-11-18-2.31-1.739-1.375-5.538,0-7s1.729-.552,3-2c1.681-1.914,2.806-7.044,2-9-1.873-4.535-2.451-12.785-2-23,0.109-2.459,3.028-2.774,4-5,2.944-6.744,4.666-9.764,8-20,3.061-9.4,1.181-17.081,5-23,3.889-6.026,11.42-8.335,14-16,1.758-5.231-.3-8.639-1-15C390.866,475.651,397.079,463.34,391.907,457.061Z',
    'fejer': 'M484.108,290.28c-3.2-2.926-10.625.025-18.958,0-5.383-.016-8.24-0.68-11.973,2-2.118,1.519-4.432,2.88-4.989,4.994-1.138,4.325,2.759,7.918,1,10.987-1.531,2.668-6.033,2.3-10.975,4-6.369,2.181-10.457,5.761-11.515,7.632-1.53,2.7-1.219,7.5-4.45,10.347a9.336,9.336,0,0,1-3.991,2,12.351,12.351,0,0,1-10.975-3c-3.171-2.927-2.6-5.785-5.986-8.989a13.76,13.76,0,0,0-4.989-3c-3.051-1.062-5.607-1.255-6.985,0-1.287,1.174-.668,3.024-2,4-1.654,1.211-3.981-.74-5.987,0-3.305,1.218-3.6,9.917-4.988,12.984-2.987,6.576-9.066,7.519-10.976,14.982-0.54,2.11-.64,6.807,1,11.986,2.212,6.992,4.892,10.382,7.982,10.987,2.382,0.465,3.721-1.037,5.987-1,6.035,0.1,10.95,7.951,12.97,12.984a32.177,32.177,0,0,1,2,8.99c0.645,15.894,2.434,73.274-2.993,90.891-0.285.924-1.789,6.124,0,10.987,1.175,3.195,2.694,4.621,3.991,4.994,3.753,1.079,6.9-4.724,11.973-4.994,4.869-.26,6.379,3.714,11.973,3.995,1.663,0.083,3.949-.879,5.986,0,4.185,1.806,3.708,7.438,7.983,9.988a11.8,11.8,0,0,0,7.982,1,14.624,14.624,0,0,0,4.988-2c2.849-1.739,5.245-5.876,7.983-5.993,1.674-.071,4.14,1.818,6.984,5.993,1.221,1.794,4.514,8.053,7.982,11.986,2.378,2.7,4.394,3.891,5.986,4,4.286,0.279,7.578-4.626,10.976-8.989,1.71-2.2,5.057-5.9,7.982-8.989,5.538-5.847,10.52-7.464,14.966-13.984,2.642-3.872,3.367-6.5,6.985-8.989,2.712-1.866,6.19-2.163,8.979-4.994,3.252-3.3,3.648-7.621,3.991-10.987,0.839-8.213,2.115-14.718,2-22.972a35.03,35.03,0,0,0-1-8.99c-2.3-8-8.558-12.553-10.975-16.979-2.364-4.329-4.282-15.719-1-29.964,1.612-6.993,4.016-10.787,2.993-16.98-1.142-6.914-6.717-12.338-13.968-20.975-4.29-5.109-8.014-9.99-8.98-16.98-0.442-3.2-.009-5.523-0.462-8.722a32.029,32.029,0,0,0-3.529-11.254c-2.937-5.291-7.108-6.568-8.98-11.985C484.051,295.329,486.88,292.811,484.108,290.28Z',
    'pest': 'M513.031,221.542a43.325,43.325,0,0,1-15-17.994c-4.063-9.3-5.651-22.332-1-24.993,1.891-1.081,3.626.235,6-1,2.442-1.269,3.385-3.954,4-6,0.2-.655,1.438-7.671,3-10,3.322-4.947,11.021-6.595,17-5,8.388,2.239,13.827,10.988,13,17.995-0.284,2.408-1.51,6.381-4,7-1.121.277-2.358-.516-3,0-1.172.941,0.5,5.1,2,8,5.7,11.046,13.092,18,18,20.994,5.809,3.537,14.876,6.206,27,7,19.2,1.254,33.022-1.9,37,5a14.7,14.7,0,0,1,1,4c1.248,7.59,1.6,13.8,4,19.993,2.263,5.835,6.044,11.54,8,11,1.116-.31,1.048-2.651,2-6,0.856-3.007,3.485-10.473,8-11a6.764,6.764,0,0,1,5,2c3.392,2.983,3.71,7.595,4,10a34.338,34.338,0,0,0,4,13c1.731,2.967,8.731,8.368,9,14,0.117,2.446-.874,3.553-1,6-0.26,5.063,1.857,11.239,6,13,1.157,0.491,3.939.305,7,0,2.861-.285,5.972-0.595,7,1,0.628,0.974.2,2.225,0,3-0.376,1.439.243,5.723,1,9,2.34,10.11,13.643,14.372,27,24.992,10.293,8.184,15.406,16.157,16,20.994,0.256,2.083-.911,7.131,1,11,3.066,6.2,9.778,5.833,13,12,0.853,1.631,1.763,5.9,1,11-0.6,4.043-2.35,5.961-3,10-0.945,5.873,1.119,10.48,3,15,4.6,11.045,6.227,17.831,4,19.994-1.753,1.7-6.017.367-9,1a18.155,18.155,0,0,0-9,5c-2.125,2.19-2.68,4.185-5,5-3.572,1.253-7.281-1.912-11-2-2.806-.066-5.975.921-9.645,3.56-3.75,2.695-4.107,6.11-7.355,7.437-6.853,2.8-18.035-6.083-25-15-4.5-5.76-7.756-12.24-12-18.994-3.18-5.062-7.351-11.115-14-12-2.093-.277-7.074-0.361-10,3-2.245,2.579-1.435,5.429-3,8-2.544,4.177-7.326,3.9-14,6-2.9.91-14.361,8.441-18,6a4.625,4.625,0,0,1-2-3c-0.547-3.509,4.7-6.495,6-11a9.139,9.139,0,0,0,0-6c-1.8-4.653-8.322-7.441-13-6-2.9.893-4.281,3.424-7,5a30.516,30.516,0,0,1-5,2c-4.524,1.721-6.93,3.895-11,7-4.985,3.8-10.581,7.284-13,8-5.09,1.5-14.019,2.367-22-3a24.864,24.864,0,0,1-8-9c-6.269-11.812-1.523-30.041,0-34.989a25.681,25.681,0,0,0,1-9,21.593,21.593,0,0,0-2-7c-3.6-7.7-10.4-11.937-14-17-4.236-5.96-10.022-16.311-7-23.992a10.52,10.52,0,0,0,1-6c-0.633-3.562-3.485-5.678-5-7-1.875-1.635-5.633-7.261-8-14a33.554,33.554,0,0,1-2-12c0.875-9.9,8.24-20.364,17-21.993,2.7-.5,7.7,1.117,10-1,3.525-3.245-.562-10.779,3-14,2.82-2.546,7.67.443,10-2,2.4-2.514.222-8.791-3-15a46.172,46.172,0,0,0-8-11',
    'baranya': 'M499.38,681.774c-1.778-5.252-10.314-5-19.033-9.006-3.215-1.476-10.61-8.045-17.03-15.01-4.5-4.881-8.913-10.472-10.018-13.009-2.171-4.986-2.736-9.715-5.009-10.007-1.78-.229-2.951,2.6-6.01,6-1.713,1.9-6.235,5.322-11.02,8.006-1.687.946-5.344,2.823-6.011,2-0.622-.767,2.284-3.778,3.006-7,0.89-3.979-.713-6.585-2-11.007-1.351-4.627-.389-7.467-2-12.009-2.133-6-5.718-7.069-8.014-13.009-0.774-2-1.526-4.619-4.008-6-2.321-1.3-4.562-.614-8.014,0-5.413.963-8.931,0.51-11.019,3-1.589,1.9-1.348,3.888-2,7-0.957,4.55-2.934,8.083-4.007,9.006-4.547,3.917-12.724,1.171-15.026,5-1.053,1.752.195,3.331-1,5-1.508,2.107-5.668,2.281-13.023,1-5.468-.952-9.345-2.039-13.023,0a11.24,11.24,0,0,0-5.009,6,41.291,41.291,0,0,1-3,7c-1.349,2.676-2.249,4.644-7.013,6-5.8,1.655-12.627,2.318-15.026,2-3.974-.525-5.522-0.121-9.016,1-4.122,1.324-6.434,5.36-8.014,9.006a113.393,113.393,0,0,0-6.011,18.013c-0.6,3.364-5.292,9.757-6.01,18.012-0.488,5.605-4.826,20.241,1,26.018,1.556,1.542,3.738,2.172,5.009,3,4.847,3.165,7.147,8.833,8.014,12.008,1.582,5.793-1.433,12.884,2,17.012,2.323,2.789,7.291,2.731,10.018,4,5.23,2.438,5.692,5.784,11.019,8,6.284,2.62,11.444.7,18.032,0,6.241-.664,18.435,2.113,26.046,3,12.159,1.421,20.01-.368,26.046,1,8.715,1.976,13,2.9,27.048,3,3.006,0.022,3.553,4.536,7.012,6,1.631,0.692,6.182,2.215,9.016,0,2.132-1.667,1.918-5.063,3-7,2.347-4.189,7.026-4.911,12.021-7a34.134,34.134,0,0,0,11.02-7c6.6-6.5,7.779-18.414,16.028-22.016a15.538,15.538,0,0,1,8.014-1c5.362,0.659,9.4,5.519,13.068,4.43,3.552-1.055,4.117-6.391,5.966-12.436,1.707-5.58,11.061-19.013,8.014-23.016-0.57-.749-1.932-1.487-4.007-2-5.735-1.419-14.334,1-17.03-2-1.286-1.434-1.191-3.772-1-5,0.806-5.249,6.758-6.437,8.014-12.008A8.269,8.269,0,0,0,499.38,681.774Z',
    'tolna': 'M526.41,480.094c-2.8-.774-5.735,2.52-11.02,8.006-3.1,3.22-7.1,7.325-9.017,9.007-3.944,3.469-7.41,5.049-10.019,9.007a101.013,101.013,0,0,1-7.013,9.007c-1.91,2.339-3.859,4.915-6.011,6-2.177,1.1-6.2,3.085-10.019,1-2.384-1.3-3.394-4.592-4.007-6-2.5-5.755-4.72-8.813-9.017-12.01-2.714-2.018-4.8-2.383-6.012-2-2.7.85-4.2,2.046-6.011,5a5.621,5.621,0,0,1-4.007,3,14.592,14.592,0,0,1-10.019-3c-3.053-2.666-2.8-5.009-6.011-7.006-3.032-1.886-6.728-1.368-10.019-2-3.842-.739-5.118-2.674-9.017-3-2.234-.188-6.428,1.668-11.02,4-6.806,3.46-12.722,7-15.028,10.007-3.283,4.285-4.652,9.05-6.012,13.01-1.872,5.455-4.462,12.074-5.009,15.012-0.858,4.606-1.471,10.238-4.007,16.012-1.545,3.517-2.531,6.452-4.008,8.007-0.881.926-2.505,1.522-3.006,3-2.02,5.977-.348,10.944,1,21.016,0.842,6.283,1.812,9.437,0,13.01-0.789,1.557-4.395,2.289-5.009,4-0.643,1.8,1.764,4.376,3.006,5,4.946,2.5,5.3,6.628,9.016,13.01,1.819,3.124,4.766,3.545,7.013,4,3.388,0.691,8.463.2,11.021-3,2.837-3.55.464-7.887,3.006-12.009,0.644-1.045,3.371-3.4,7.013-5,5.93-2.605,10.178-1.2,14.026,1a14.9,14.9,0,0,1,7.013,8.006c1.559,4.392,4.745,8.869,6.011,14.011,1.9,7.729,3.062,8.977,2,14.01-0.888,4.223-2.767,9.1-2,10.008,0.555,0.659,2.918-.447,4.008-1a50.275,50.275,0,0,0,14.849-10.865c0.942-.927,1.878-3.208,3.185-3.145,1.7,0.081,3.7,1.464,5.009,5,0.46,1.246,2.354,5.56,3,7.006,3.418,7.588,9.179,10.356,17.032,17.013,6.16,5.221,14.516,13.364,23.043,16.012,3.109,0.966,5.736,1.03,8.015,0,2.1-.948,4.352-3.224,6.012-8.006,2.268-6.534,1.7-11.483,3-17.013a46.2,46.2,0,0,1,6.011-13.01c2.877-4.291,5.559-7.63,6.012-13.01,0.371-4.417-1.04-7.033-2-11.009-0.76-3.132-.555-9.6,0-16.012,0.137-1.582,2.331-15.181,2-23.018-0.386-9.229-2.395-18.106-4.008-21.016a16.881,16.881,0,0,1-2-11.009c0.484-2.785.721-5.724,4.008-7,5.092-1.985,7.764-2.416,12.022-5,4.471-2.717,6.36-7.539,7.013-10.008a19.6,19.6,0,0,0-1-12.009c-2.363-6.27-5.019-11.983-7.014-18.014C529.512,487.31,529.8,481.031,526.41,480.094Z',
    'bacs-kiskun': 'M743.992,438.064c-3.952-2.24-9.439-1.093-13.016,1-4.047,2.366-4.757,5.406-9.011,7.992-2.992,1.819-5.549,2.214-7.008,2-2.137-.316-2.26-2.5-4-3-2.713-.765-7.726-0.034-10.012,1-4.373,1.976-4.061,6.657-8.01,7.993-3.255,1.1-6.861,0-12.014-3-8.851-5.157-16.159-11.981-18.021-14.985-3.55-5.726-5.063-11.467-11.014-18.983-3.36-4.243-6.51-6.585-10.012-6.993-3.365-.393-6.772.019-9.01,2-2.521,2.228-2.519,5.7-4,7.993-1.661,2.561-4.445,4.039-9.011,5.994-4.89,2.093-9.809,4.753-16.019,5.994-4.086.817-7.4,0.217-8.01-1-0.73-1.468,2.642-5.805,4-9.99,0.915-2.808,2.082-5.039,1-7.993-1.337-3.653-4.712-7.4-9.011-7.992-4.631-.634-8.441,2.666-10.012,4-2.682,2.272-8.867,4.785-13.015,7.992-6.445,4.983-12.433,8.629-15.018,8.992-4.148.581-11.633-.96-16.019,2-2.563,1.728-4.122,4.9-5.006,10.99-1.206,8.308-.592,13.011-1,20.98-0.367,7.164-5.008,10.521-5.006,18.982,0,3.918,1,7.23,3,11.989,4.616,10.972,9.2,17.875,10.012,27.973,0.417,5.167-1.338,6.423-3,8.992-1.846,2.847-6.727,7.207-14.016,10.99-2.627,1.363-5.931,1-7.009,4-1.109,3.082.062,8.369,1,9.99,1.59,2.743,2.572,12.454,3,22.979,0.4,9.7,1.907,17.311,1,26.974-0.766,8.175-1.25,11.76-1,20.981,0.127,4.682-1.486,10.087-4,15.985-2.1,4.914-4.164,7.926-5.006,12.987-0.862,5.185.4,8.663-1,13.987-0.714,2.708-3.887,8.708-9.011,13.987-3.952,4.073-8.143,6.994-10.012,12.988-0.926,2.971-.888,5.15,0,5.994,3.344,3.177,12.106,2.333,15.018,2a14.673,14.673,0,0,1,6.007,2c0.9,0.739-.533,4.754-1,6-1.368,3.629-4.382,12.2-5.252,19.728-0.484,4.183.067,6.512,1.248,7.246,2.27,1.413,10.422-4.353,12.014-5,6.448-2.6,11.128.687,17.02-3,4.152-2.6,5.683-5.426,11.013-6.993,2.763-.813,3.694-3.355,5.006-5,2.054-2.568-.58-6.49,1-9.99,1.678-3.714,6.693-6.071,10.012-5,2,0.65,2.845,2.371,4,4,2.953,4.14,7.081,6.862,9.011,6.993,8.7,0.591,14.488-2.4,22.027-7.992,4.017-3.069,9.978-4.034,14.016-6.994,10.341-7.579,18.945-14.537,24.029-20.98,4.924-6.239,9.244-10.857,16.019-12.988,4.7-1.478,11.31-.217,17.021-3,1.546-.753,2.774-1.7,3-3,0.336-1.9-1.64-3.6-3-5-3.145-3.212-5.681-7.084-6.007-10.989-0.389-4.644,2.573-6.338,3-10.99,0.293-3.169-1.271-6.029,0-9.99a12.834,12.834,0,0,1,4-6c3.9-3.148,7.99-1.056,14.017-2,2.641-.413,8.04-3.328,13.015-5.994,4.144-2.221,6.473-4.2,8.01-6.994,3.54-6.428,1.347-14.878-1-18.982-2.459-4.3-6.722-6.709-11.014-8.991-2.389-1.272-4.867-2.226-5.006-4-0.208-2.664,5.023-5.17,7.009-5.994,7.407-3.074,12.978-.42,20.024-4,2.724-1.383,5.962-3.053,7.008-6a59.712,59.712,0,0,0,3-18.982c-0.113-4.426-.22-6.545,0-11.988,0.051-1.271-1.536-1.675-2-3a11.7,11.7,0,0,1,0-6.993c1.41-5.341,5.445-8.8,8.01-12.988,1.216-1.983-.583-5.309,1-7.992,1.832-3.1,5.723-3.893,8.01-6,1.668-1.533,3.954-3.092,4-5.994,0.082-4.746,3.268-8.175,6.007-12.988,2.514-4.419-.416-7.336-1-10.989C747.507,445.739,746.938,439.733,743.992,438.064Z',
    'nograd': 'M613.525,222.763c5.017,5.905,1.788,13.754,6.022,23.1,2.979,6.573,6.233,11.871,8.029,11.046,0.821-.378,2.551-2.873,3.011-5.021,0.57-2.664,2.18-4.322,5.018-7.03,5.836-5.568,14.469-3.418,18.065-9.038,2.325-3.631-.032-7.256,3.011-11.046,1.838-2.288,3.942-2.537,7.026-4.017a24.7,24.7,0,0,0,8.029-6.025c4.936-5.739,3.731-10.413,8.029-16.067,1.941-2.554,6.967-8.046,14.051-9.038,4.036-.566,6.893,1.207,11.04,0,4.49-1.307,7.609-5.919,12.044-14.059,3.65-6.7,5.742-11.4,5.018-15.064-0.852-4.3-6.177-8.8-5.018-13.054a6.476,6.476,0,0,1,2.007-3.013c4.792-4.622,16.287-6.841,17.062-11.046,0.466-2.534-2.847-5.189-4.015-6.026a12.51,12.51,0,0,0-9.033-2.008c-6.361.938-8.478,6.563-15.054,7.03a13.254,13.254,0,0,1-6.022-1c-2.789-1.189-3.225-2.93-6.022-4.017-3.544-1.376-6.179.776-9.033-1-2.906-1.813-2.525-5.555-5.018-8.033-0.966-.961-4.464-2.628-9.032-3.013-3.472-.293-5.837,1-9.033,0-4.837-1.507-5.4-5.811-10.037-7.03-2.873-.754-6.459-0.053-11.04,3.013-3.295,2.207-7.159,7.1-10.036,15.063-2.578,7.139-2.773,12.062-7.025,16.068s-9.526,4.676-12.044,5.021c-8.788,1.2-15.729,3.868-25.091,4.017-11.146.177-21.409,1.19-32.116,1-12.726-.222-25.324-0.9-27.1,4.017-0.718,1.988.52,4.26,1,5.021,2.206,3.473,5.494,3.96,7.026,7.029,1.12,2.244,1.24,4.409-1,8.034-1.329,2.147-4.357,4.141-5.018,7.029-0.774,3.384,1.252,6.524,3.011,9.038,4.255,6.082,9.44,12.113,12.043,14.059a44.991,44.991,0,0,0,14.051,7.03,92.434,92.434,0,0,0,25.091,4.017C600.43,218.18,608.86,217.271,613.525,222.763Z', 
    'heves': 'M858.906,257.99c-0.524-2.143-2.933-3.814-6.989-5-5.64-1.648-10.63.548-15.977-2a21.3,21.3,0,0,1-4.993-4c-5.254-5.461-6.267-10.479-10.983-15.994-1.6-1.873-2.936-2.881-4-5-3.018-6.042.392-9.673-2-15-2.355-5.249-9.623-6.759-9.985-12a6.416,6.416,0,0,1,1-4c1.5-2.137,4.053-2.1,5.992-4,1.587-1.554,2.147-2.871,2-4-0.279-2.1-3.942-3.829-4.993-5-1.509-1.68-2.784-4.461-3-9-0.219-4.706,2.183-7.54,3-11,2.407-10.229.713-18.785-2-26.992-0.79-2.393-5.089-6.487-8.987-6-2.182.274-3.581,1.953-5.991,5-2.3,2.9-4.059,5.147-5.991,6-4.395,1.935-7.445-1.146-11.983,0-4.105,1.036-5.876,5.062-9.985,5-1.724-.027-4.664-1.726-7.988-5-3.47-3.416-5.26-6.237-8.987-8-3.667-1.731-6.677-2.031-8.987-1-3.878,1.731-3.533,6.265-6.99,9-3.061,2.419-8.728,3.841-10.984,5a3.8,3.8,0,0,0-2,2c-0.577,1.659.653,3.468,1,4,2.289,3.511,2.216,7.8,2,10-1.049,10.556-6.445,18.71-12.981,24.992a18.4,18.4,0,0,1-5.991,4c-3.427.973-6.887-.728-9.985,0-1.631.383-7.137,4-10.984,8-3.447,3.585-4.068,8.293-5.992,12-2.453,4.723-3.7,7.012-7.988,9-1.245.577-3.25,2.889-4.993,4-1.57,1-3.976,1.39-4.992,3-2.281,3.611-.82,6.021-3,9-2.309,3.159-5.744,3.848-6.99,7-1.064,2.692,1.726,7.43,2,9,1.385,8,5.016,19.639,13.98,26.991,0.917,0.752,3.278,3.231,4.993,3,1.2-.163,1.657-1.459,3-3a10.586,10.586,0,0,1,3.994-3c3.16-1.122,7.208-.15,9.986,2,1.8,1.39,2.417,2.864,3.994,3,1.809,0.155,3.794-1.463,5.991-5,2.067-3.325,3.317-6.329,5.991-9,1.771-1.766,4.17-3.325,8.829-4.233,5.435-1.059,8.463-1.647,11.142.235a8.679,8.679,0,0,1,3,4c1.386,3.631-.324,6.991,0,10a13.868,13.868,0,0,0,5.991,10c3.306,2.161,8.461,3.218,11.982,1,2.5-1.578,2.615-3.923,4.993-6a11.976,11.976,0,0,1,6.99-3c4.155-.214,7.177,2.442,11.982,7,5.857,5.553,9.877,9.568,10.984,14,0.974,3.9-.06,6.123,1,10,2.224,8.143,10.458,15.572,17.973,15a13.054,13.054,0,0,0,6.99-3c6.589-5.322,12.968-11.166,17.974-16,5.7-5.5,11.795-10.144,17.973-13a20.68,20.68,0,0,0,9.986-10c1.205-2.4,3.3-4.334,3.994-7a38.374,38.374,0,0,1,3.994-10C857.552,262.454,859.488,260.369,858.906,257.99',
    'jasz-nagykun-szolnok': 'M872.481,256.5c-2.393-2.485-8.229-1.653-12.006,1-3.567,2.508-4.582,6.14-6,10.02a76.161,76.161,0,0,1-4,9.018c-4.417,8.329-10.906,13.031-15.007,16.032-4.788,3.5-10.789,7.9-13.007,10.021-8.871,8.5-13.234,12.329-22.011,20.04-2.584,2.27-6.135-.462-9-1-8.154-1.534-11.478-8.16-13.007-12.024-1.95-4.927-1.849-7.545-3-12.024-2.648-10.3-11.942-18.857-21.011-20.041-3.6-.47-7.247-0.172-9,2-1.463,1.812-.711,3.816-2,6.012-1.351,2.3-4.821,2.71-7,3.006-3.415.464-6.082-.689-10-6.012a19.865,19.865,0,0,1-4-9.018c-0.291-2.084.985-8.024-1-10.02-1.523-1.531-4.06-3.23-6-3.006-7.432.856-12.787,1.246-16.008,4.008-3.195,2.739-3.114,7.682-7,10.02-1.861,1.119-5.191,1.893-10,1-2.852-.527-4.11-1.805-7-2-4.535-.311-7.768,6.676-13.007,7.014-2.608.169-3.213,6.984-1,12.024,1.11,2.531,3.738,6.081,8,7.015,4.282,0.936,9-2.241,10-1,0.585,0.721-.923,3.69-1,4.008-1.045,4.288,2.162,8.457,5,12.024,3.615,4.54,7.339,9.683,10.005,12.024,6.29,5.525,11.646,6.583,18.009,12.024,7.663,6.553,11.531,13.97,12.006,17.034,0.5,3.223-.946,7.711,1,12.024,2.4,5.327,7.49,6.139,11.006,11.022a19.3,19.3,0,0,1,4,11.023c0.027,4.553-2.449,8.623-3,11.022-0.7,3.055-.089,9.166,2,16.032,1.931,6.344,4.423,16.29,7,24.048,1.6,4.806-1.475,9.163,1,13.026,0.751,1.173,2.234,2.145,3,4.008a10.129,10.129,0,0,1,0,7.015c-1.5,4.278-4.618,4.21-6,8.016-1.284,3.526,1.035,6.784-1,10.02a11.517,11.517,0,0,1-4,3.006c-2.71,1.31-7.109,1.261-8,3.006-1.338,2.608,2.776,8.435,5,9.018,7.957,2.082,12.95,6.231,21.01,6.012,3.6-.1,3.574-4.1,7-6.012a13.844,13.844,0,0,1,8-2c5.471,0.527,6.963,5.9,12.006,6.012,6.778,0.152,12.277-3.64,17.008-9.018,2.732-3.106,3.069-6.61,3-10.02-0.056-2.849-.818-4.577,0-7.014,1.384-4.126,5.621-6.146,10-8.016,7.951-3.393,16.019-6.221,19.009-6.013,1.2,0.084,8.433,2.556,13.007,1,5.582-1.9,8.776-7.423,10-11.023,2.519-7.379-1.981-14.208,2-21.042a12.762,12.762,0,0,1,5-5.01c4.5-2.316,7.816.1,12.006-2,2.271-1.14,5.258-4.567,7-11.022,0.989-3.658.68-7.7,1-10.02,1.069-7.744,6.559-13.975,10-17.034,3.395-3.015,9.314-6.171,13.007-12.025,1.508-2.39,3.478-4.131,4-8.016,1.613-11.955-1.235-32.332-2-43.086-0.948-13.3-3.166-27.354-7-39.079-1.2-3.667-4.787-4.425-7-5.01-3.066-.808-5.243.253-8,0-2.4-.219-7.271-1.225-10.005-5.01-0.919-1.272-1.811-4.257-2-8.016C873.26,261.122,874.057,258.139,872.481,256.5Z',
    'csongrad-csanad': 'M833.316,506.165c-0.177-1.8-5.008-3.834-9.015-5.989-8.751-4.708-15.073-6.862-20.033-5.989-2.664.469-6.745,2.723-11.018,4.991-4.157,2.2-9.318,4.854-14.023,2.994-2.625-1.038-3.277-2.783-6.01-3.992-2.423-1.072-7.225-2.261-10.017,0-2.379,1.926-1.537,5.39-4.006,6.986-1.5.971-3.507,0.8-6.01,0-5.672-1.81-12.8-8.951-18.03-7.985-0.946.175-3.329,1.491-6.01,3.993-5.923,5.527-7.445,7.9-7.012,12.975,0.251,2.93-.475,5.4,0,6.987,1.132,3.786.159,10.188,0,16.968-0.165,7.045.847,11.057-2,14.972a11.145,11.145,0,0,1-8.013,4.99c-6.808.946-10.284,1.285-16.027,3-3.084.918-8.97,4.1-9.015,6.987-0.018,1.21.984,2.177,2,2.994,3.551,2.846,7.151,3.72,10.016,5.989,4.843,3.834,5.857,10.077,6.01,12.975,0.294,5.585-3.089,9.558-6.01,12.976-2.868,3.355-4.592,4.245-9.015,6.986-4.7,2.914-7.091,4.1-11.018,3.993a45.39,45.39,0,0,0-9.015,1c-3.071.609-6.368,2.988-7.011,5.989-0.663,3.09,2.024,4.782,2,7.985-0.028,4.283-3.725,5.718-4.007,9.981a15.691,15.691,0,0,0,3,9.981c3.767,5.35,5.245,8.626,9.015,13.974,3.752,5.321,7.291,8.548,12.02,9.981a20.823,20.823,0,0,0,11.018,0c9.055-2.175,11.117-7.825,20.033-9.981,5.43-1.314,10.132-.755,12.02,0,3.11,1.243,5.785,4.941,10.137,5.362,2.74,0.264,6.03-1.208,6.891-1.37,2.11-.4,6.885-0.108,12.02,2a64.065,64.065,0,0,1,12.02,5.989c3.275,2.184,7.727.91,10.017-1,4.083-3.4,8.487-4.973,14.023-3.993,2.13,0.378,10.385-.1,16.026-1,4.315-.687,7.1-1.715,9.015-3.992,1.4-1.669,2.127-5.44,3.863-5.832,1.685-.381,2.843,2.573,5.152,3.836,6.394,3.5,11.5,6.287,16.027,7.984,3.809,1.428,7.407-1.26,9.014-2,4.478-2.05,5.921-5.77,9.015-10.979,2.327-3.916,5.208-6.346,7.012-10.979,1.4-3.592,0-10.008,0-16.968,0.006-9.068.672-14.876-3-18.964-1.929-2.145-3.687-3.791-5.008-3.993-4.448-.678-4.81,2.708-9.015,4.991-2.8,1.519-5.287,1.212-9.015,1-2.512-.144-7.168-2.52-11.018-5.989-1-.9-1.865-2.765-1-5.989,0.919-3.434,3.347-6.159,4.007-7.984a41.668,41.668,0,0,0,2-20.961c-1.737-13.267-2.8-28.139-2-35.932C835.583,523.705,834.611,519.342,833.316,506.165Z',
    'borsod-abauj-zemplen': 'M1099.75,58.975c-2.6-4.178-14.37-1.62-22.98,1-5.03,1.528-17.05,7.57-27.98,9-6.72.879-12.07,0.358-16.99-2-3.16-1.518-7.22-4.61-10.99-10-5.99-8.572-5.71-21.2-13.99-27-4.56-3.2-7.538-1.448-11.989-5-4.815-3.843-4.746-8.884-9.993-12-3.9-2.316-9.1-2.512-14.988-1-5.577,1.432-8.25,4.288-12.99,7-2.628,1.5-10.6,3.572-17.986,5-8.459,1.636-17.6,2.947-22.983,3-7.97.079-16.144-.855-19.984-2-8.565-2.554-12.981-6.934-21.983-9-6.795-1.56-16.253-1.269-25.98,0-17.5,2.284-25.722,4.1-32.975,12-2.361,2.573-3.826,6.092-6,10-3.059,5.512-8.484,10.1-11.991,18-1.468,3.307-4.345,10.439-6,15-4.654,12.867-4.976,17.061-12.99,20-4.044,1.484-6.695,3.945-10.991,6-2.421,1.159-7.127,3.449-10.992,4-3.541.5-4.675,1.561-7.994,2-4.024.534-8.794,5.254-12.99,16a13.293,13.293,0,0,0-1,6c0.214,2.864,1.072,5.552,3,7,3.459,2.6,7.8-.593,11.991,1,5.815,2.208,5.411,9.161,10.991,11,4.788,1.578,9.425-3.266,14.989-4,2.994-.4,8.39,1.3,11.991-1,3.767-2.405,3.923-7.534,7.993-9,2.709-.977,5.675.276,7,1,1.919,1.051,3.388,4.054,5,12a61.947,61.947,0,0,1,1,10c0.084,4.285-.39,9.451-1,11-0.825,2.1-3.115,7.534-3,11,0.154,4.541,5.134,6.238,6,11,0.358,1.979.624,4.38-2,8-0.838,1.157-3.991,3.15-4,5-0.006,2.237,5.383,5.376,6,6,4.252,4.337,4.965,10.31,5,13,0.012,1.035-1.059,5.206,0,8,1.564,4.127,6.716,5.6,8.993,8,4.815,5.077,2.234,9.925,7,14,6.229,5.333,13.886-.117,20.984,5,1.084,0.782,4.689,6,7.993,6,2.09,0,3.24-1.526,5-2,4.114-1.11,7.554,1.887,10.991,2,5.3,0.174,9.315-3.55,12.99-7,10.765-10.109,19.046-17.056,23.982-27,2.246-4.527,5.586-15.806,6.994-27,1.318-10.472,2.059-21.471,1-25-0.565-1.882-2.115-6.354,0-10,2.13-3.673,6.807-4.594,8.993-5,8.031-1.5,17.425-3.219,20.984-3,7.751,0.477,12.183,2.279,18.985,0,5.015-1.681,8.165-4.527,8.993-6,3.651-6.493-2.457-14.014,0-22,1.471-4.78,5.361-8.582,8.993-11,8.437-5.619,16.8-3.01,27.974-4,7.32-.649,14.19-4.482,22.99-7,12.39-3.548,21.19-5.121,26.98-11,4.62-4.7,6.53-9.706,12.99-12,3.4-1.21,5.61-.463,8.99-2s7.86-5.666,10.99-14C1100.06,62.482,1100.22,59.725,1099.75,58.975Z', 
    'bekes': 'M1033.56,419.983c-2.32-1.047-10.12,11.843-25.05,20.993-7.12,4.36-13.558,7.578-17.039,5-8.246-6.111-12.4-5.532-20.043-8s-12.86-1.516-16.035-6c-2.486-3.511-2.764-8.858-1-13,1.864-4.376,5.4-5.632,8.017-10,2.5-4.176,2.652-7.37,2-9-1.291-3.244-5.171-4.455-7.016-5-4.922-1.449-16.69-4.681-25.054-7-8.994-2.492-15.493-6.691-17.036-9-2.148-3.209-2.761-6.676-5.011-7-2.206-.316-4.16,2.651-6.013,5-2.746,3.478-6.991,6.182-11.024,10-5.286,5-8.7,8.625-10.021,13-1.655,5.454-.9,8.122-3.007,14-0.967,2.7-3.318,10.254-9.019,11-2.99.389-4.919-.769-8.018,0-3.295.818-5.278,4.352-6.013,6-3.405,7.627,1.842,12.981-1,20.993a14.123,14.123,0,0,1-8.017,8c-5.236,2.209-9.816.393-15.032,1-3.072.357-6.616,2.839-10.022,4-7.1,2.418-11.958,1.987-16.035,6-2.969,2.922-5.549,7.9-5.01,12,0.307,2.341,3.1,5.763,8.017,9,6.488,4.267,13.324,2.765,19.041,8,1.765,1.615,4.3,3.961,5.011,8,1.09,6.142.1,12.452,0,14-0.621,9.193.2,23.083,1.658,36.794,0.708,6.651,1.409,15.094-.656,25.184-1.347,6.581-1.6,12.528-3.007,14-1.162,1.215-3.054,2.784-3.006,5,0.035,1.61,1.477,3.7,5.011,6,7.671,5,12.717,5.651,16.034,4,3.051-1.519,3.461-4.866,7.015-6a8.05,8.05,0,0,1,7.016,1c4.518,3.457,1.246,12.343,5.01,18.993,1.673,2.955,3.8,7.053,7.015,7,10.419-.181,19.12-0.2,24.052,0,7.144,0.284,16.1,3.74,25.054,3,5.644-.467,6.771-5.238,11.024-10,3.1-3.463,6.624-3.481,9.019-7,2.507-3.68,3.749-7.574,4.009-13,0.233-4.849,1.525-8.22,4.009-9a51.629,51.629,0,0,0,10.021-4c3.644-2.074,5.618-4.714,6.013-6,0.836-2.713-.092-5.423-2-9-2.677-5-5.747-8.09-6.013-12-0.323-4.749,3.792-8.425,5.011-12,1.34-3.927,2.4-9.449,5.011-14.994,0.848-1.806,2.5-3,6.013-4,2.953-.844,7.219,1.091,10.021-1,2.622-1.957,3.9-8.063,5.011-10,2.966-5.164,6.232-4.087,10.017-9,2.22-2.877,5.51-8.333,4.01-12.995-0.71-2.211-2.68-3.345-3-6-0.41-3.312,2.07-5.019,4.01-9,2.42-4.977.06-7.479,3-12,3.19-4.9,9.15-4.972,11.03-10,1.59-4.256-1.79-6.878,0-11,1.96-4.549,7.42-4.374,10.02-9,1.71-3.049,1.17-5.889,1-9C1032.11,428.805,1035.09,420.67,1033.56,419.983Z',
    'hajdu-bihar': 'M1002.85,190a12.952,12.952,0,0,0-6-6c-6.388-2.822-12,2.485-21.974,5-11.82,2.982-19.632,1.789-24.969-1-3.528-1.843-9.943-9.728-16.98-10a13.313,13.313,0,0,0-8.989,3c-5.077,4.351-5.276,11.692-5.993,20a93.25,93.25,0,0,1-4.781,21.593c-4.662,11.863-12.271,17-16.194,20.407-5.883,5.117-10.733,9.434-18.977,16-2.47,1.967-2.98,5.549-3,9-0.009,1.862.326,7.33,4,10,4.582,3.334,10.474-.534,15.981,2,2.086,0.96,3.809,4.129,5.993,10,1.56,4.195,6.188,23.176,7.99,42,1.9,19.888-.284,29.267,2,43,0.449,2.7,5.119,6.007,9.988,9,13.712,8.431,28.23,4.951,39.951,13,1.57,1.078,4.06,5.538,2,10-1.912,4.138-5.431,6.01-7.99,10-2.2,3.426-3.678,8.692-2,13,2.4,6.153,12.156,6.554,22.907,10.993,9.109,3.76,9.926,7.147,20.041,7.007,7.3-.1,11.976-5.3,15.976-8,11.7-7.888,10.68-10.652,19.98-20,4.27-4.289,6.63-7.805,10.99-12,2.65-2.554,7.12-3.5,7.99-5,2.3-4,4.06-10.843,6.99-15,1.2-1.7,4.37-.955,5.99-3,1.94-2.441,1.23-6.024,1-7-2.56-11.141,2.11-16.95,5.99-29,3.59-11.106,7.83-17.181,13.99-19,2.01-.6,3.99-0.819,5.99-3,2.33-2.543,3.02-7.4,2-11-2.72-9.526-3.17-18.919-2-22,2.22-5.876,8.05-6.59,11.99-12,3.08-4.243,4.47-7.651,4.99-11,0.86-5.593-.13-14-4.99-16a4.744,4.744,0,0,0-4,0c-4.36,1.487-6.01,7.3-7.99,7-1.49-.223-1.84-3.56-3-7a42.915,42.915,0,0,0-5.99-10c-4.79-6.181-8.45-8.591-10.99-8a7.67,7.67,0,0,0-4.99,3c-3.21,5-6.55,8.048-8.99,9-5.89,2.3-10.31-1.441-20.97-7-3.14-1.634-10.6-5.294-15.98-8-4.21-2.111-10.26-5.17-13.99-12a29.857,29.857,0,0,1-2.99-13C1002.78,205.973,1005.74,195.746,1002.85,190Z',
    'szabolcs-szatmar-bereg': 'M995.818,185.085c3.358,0.738,7.512,2.134,8,4.992,1.45,8.41-1.66,15.688,0,23.96,1.33,6.6,5.82,11.718,12.01,16.972,4.96,4.219,12.13,6.536,20.01,10.982,7.39,4.171,10.86,8.467,16.01,7.986,6.26-.584,9.87-2.5,12-4.991,2.11-2.467,2.29-6.667,5-7.987,3.97-1.934,11.3,2.19,15.01,7.987,1.34,2.1,2.89,6.4,4,10.981,0.67,2.733,1.25,5.534,3,5.99,2.37,0.618,4.98-6.976,9.01-7.986,2.93-.737,3.9,1.713,6,3.993,3.99,4.334,2.21,15.078,4,15.974,0.59,0.294,2.1-.517,4.01-3,6.48-8.425,11.3-25.419,21.01-32.946,1.97-1.533,6.5-7.827,13-9.983,3.3-1.093,11.15,1.3,14.01-3,2.27-3.411,1.86-7.83,5-10.982,2.73-2.735,7.56-2.986,11.01-2,4.87,1.4,5.05,4.151,9,5.99,6.99,3.255,18.83,1.01,23.01-4.991,2.76-3.964,1.03-9,5-11.98,1.88-1.41,3.07-.67,5.01-2,4.04-2.773,3-8.241,6-11.98,3.28-4.08,6.96-3.146,11-6.989,2.68-2.54,6.54-7.8,6.01-13.976-0.4-4.579-3.09-5.715-4-9.984-1.37-6.392,2.44-8.917,1-14.975-1.85-7.736-9.5-11.669-13.01-12.979-3.37-1.255-10.23-3.026-15.01,0-2.2,1.4-4.24,3.142-7,3.994-4.62,1.423-9.99-2.049-12.01-3.994-7.66-7.375-6.27-16.409-12-23.96-4.07-5.35-9.12-9.229-15.01-10.982-4.77-1.42-12.61-.056-18.01-3.993-5.53-4.035-4.96-10.554-9-15.974-3.41-4.559-9.14-6.134-11.01-11.98-0.64-2.018-.13-7.916-3-10.982a7.135,7.135,0,0,0-3-2c-3.84-1.239-10.66,1.416-16.01,6.988-2.91,3.034-4.08,7.028-7,12.978-1.83,3.718-4.3,8.018-8.01,10.982-3.49,2.8-7.43,2.713-11,4.992-5.46,3.483-4.7,5.275-10.01,8.985-4.28,3-8.78,4.261-14,5.99-4.99,1.651-6.14,5.014-11.01,6.988-11.25,4.558-29.12,8.656-44.02,7.987-2.5-.112-9.733-0.578-15.007,3.993-4.306,3.732-5.705,9.382-6,12.978-0.489,5.91,3.639,12.507,1,17.971a13.072,13.072,0,0,1-5,4.991c-7.132,4.326-16.49.534-24.011,2-4.055.789-5.894,2.593-10,2.995-2.159.211-8.17-.68-13.006,1-3.873,1.345-5.98,3.368-7,4.992-3.355,5.321-1.563,13.6,2,14.975,2.34,0.9,4.974-1.791,8-2,4.636-.314,7.957,2.857,11,4.991,5.587,3.912,12.615,5.57,18.009,5.99C974.3,190.132,983.881,182.463,995.818,185.085Z'
};