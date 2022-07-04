const titles = [
    "ProjectA",
    "ProjectB",
    "ProjectC"
];


const aggregated = [
    {
        "_id": "62c1a61f03bc1b8ef4683cf9",
        "project": "ProjectA",
        "language": "JAVA",
        "version": "9.2.0.log",
        "scanCoverage": "92.66",
        "scanCoverageLOC": "95.96",
        "totalFiles": "778",
        "goodFiles": "712",
        "partiallyGoodFiles": "2",
        "badFiles": "1",
        "fileName": "ProjectA_JAVA_9.2.0.log",
        "createdAt": "2022-07-03T14:22:23.031Z",
        "updatedAt": "2022-07-03T14:22:23.031Z",
        "__v": 0
    },
    {
        "_id": "62c1a692c9602076dc95f16b",
        "project": "ProjectB",
        "language": "C#",
        "version": "9.2.0.log",
        "scanCoverage": "98.17",
        "scanCoverageLOC": "91.85",
        "totalFiles": "82",
        "goodFiles": "78",
        "partiallyGoodFiles": "1",
        "badFiles": "2",
        "fileName": "ProjectB_C#_9.2.0.log",
        "createdAt": "2022-07-03T14:24:18.779Z",
        "updatedAt": "2022-07-03T14:24:18.779Z",
        "__v": 0
    },
    {
        "_id": "62c1a692c9602076dc95f16e",
        "project": "ProjectC",
        "language": "JAVASCRIPT",
        "version": "9.2.0.log",
        "scanCoverage": "99",
        "scanCoverageLOC": "100",
        "totalFiles": "412",
        "goodFiles": "413",
        "partiallyGoodFiles": "0",
        "badFiles": "1",
        "fileName": "ProjectC_JAVASCRIPT_9.2.0.log",
        "createdAt": "2022-07-03T14:24:18.781Z",
        "updatedAt": "2022-07-03T14:24:18.781Z",
        "__v": 0
    }
];



const projecta = [
    {
        "_id": "62c1a61f03bc1b8ef4683cf9",
        "project": "ProjectA",
        "language": "JAVA",
        "version": "9.2.0.log",
        "scanCoverage": "92.66",
        "scanCoverageLOC": "95.96",
        "totalFiles": "778",
        "goodFiles": "712",
        "partiallyGoodFiles": "2",
        "badFiles": "1",
        "fileName": "ProjectA_JAVA_9.2.0.log",
        "createdAt": "2022-07-03T14:22:23.031Z",
        "updatedAt": "2022-07-03T14:22:23.031Z",
        "__v": 0
    },
    {
        "_id": "62c1a61f03bc1b8ef4683cfa",
        "project": "ProjectA",
        "language": "JAVA",
        "version": "9.3.0.log",
        "scanCoverage": "94.66",
        "scanCoverageLOC": "97.96",
        "totalFiles": "775",
        "goodFiles": "704",
        "partiallyGoodFiles": "6",
        "badFiles": "0",
        "fileName": "ProjectA_JAVA_9.3.0.log",
        "createdAt": "2022-07-03T14:22:23.032Z",
        "updatedAt": "2022-07-03T14:22:23.032Z",
        "__v": 0
    },
    {
        "_id": "62c1a61f03bc1b8ef4683cfb",
        "project": "ProjectA",
        "language": "JAVA",
        "version": "9.4.0.log",
        "scanCoverage": "91.66",
        "scanCoverageLOC": "99.96",
        "totalFiles": "772",
        "goodFiles": "703",
        "partiallyGoodFiles": "7",
        "badFiles": "0",
        "fileName": "ProjectA_JAVA_9.4.0.log",
        "createdAt": "2022-07-03T14:22:23.032Z",
        "updatedAt": "2022-07-03T14:22:23.032Z",
        "__v": 0
    }
];



const all = [
    {
        "_id": "62c1a61f03bc1b8ef4683cf9",
        "project": "ProjectA",
        "language": "JAVA",
        "version": "9.2.0.log",
        "scanCoverage": "92.66",
        "scanCoverageLOC": "95.96",
        "totalFiles": "778",
        "goodFiles": "712",
        "partiallyGoodFiles": "2",
        "badFiles": "1",
        "fileName": "ProjectA_JAVA_9.2.0.log",
        "createdAt": "2022-07-03T14:22:23.031Z",
        "updatedAt": "2022-07-03T14:22:23.031Z",
        "__v": 0
    },
    {
        "_id": "62c1a61f03bc1b8ef4683cfa",
        "project": "ProjectA",
        "language": "JAVA",
        "version": "9.3.0.log",
        "scanCoverage": "94.66",
        "scanCoverageLOC": "97.96",
        "totalFiles": "775",
        "goodFiles": "704",
        "partiallyGoodFiles": "6",
        "badFiles": "0",
        "fileName": "ProjectA_JAVA_9.3.0.log",
        "createdAt": "2022-07-03T14:22:23.032Z",
        "updatedAt": "2022-07-03T14:22:23.032Z",
        "__v": 0
    },
    {
        "_id": "62c1a61f03bc1b8ef4683cfb",
        "project": "ProjectA",
        "language": "JAVA",
        "version": "9.4.0.log",
        "scanCoverage": "91.66",
        "scanCoverageLOC": "99.96",
        "totalFiles": "772",
        "goodFiles": "703",
        "partiallyGoodFiles": "7",
        "badFiles": "0",
        "fileName": "ProjectA_JAVA_9.4.0.log",
        "createdAt": "2022-07-03T14:22:23.032Z",
        "updatedAt": "2022-07-03T14:22:23.032Z",
        "__v": 0
    },
    {
        "_id": "62c1a692c9602076dc95f16b",
        "project": "ProjectB",
        "language": "C#",
        "version": "9.2.0.log",
        "scanCoverage": "98.17",
        "scanCoverageLOC": "91.85",
        "totalFiles": "82",
        "goodFiles": "78",
        "partiallyGoodFiles": "1",
        "badFiles": "2",
        "fileName": "ProjectB_C#_9.2.0.log",
        "createdAt": "2022-07-03T14:24:18.779Z",
        "updatedAt": "2022-07-03T14:24:18.779Z",
        "__v": 0
    },
    {
        "_id": "62c1a692c9602076dc95f16e",
        "project": "ProjectC",
        "language": "JAVASCRIPT",
        "version": "9.2.0.log",
        "scanCoverage": "99",
        "scanCoverageLOC": "100",
        "totalFiles": "412",
        "goodFiles": "413",
        "partiallyGoodFiles": "0",
        "badFiles": "1",
        "fileName": "ProjectC_JAVASCRIPT_9.2.0.log",
        "createdAt": "2022-07-03T14:24:18.781Z",
        "updatedAt": "2022-07-03T14:24:18.781Z",
        "__v": 0
    },
    {
        "_id": "62c1a692c9602076dc95f16f",
        "project": "ProjectC",
        "language": "JAVASCRIPT",
        "version": "9.3.0.log",
        "scanCoverage": "100",
        "scanCoverageLOC": "100",
        "totalFiles": "413",
        "goodFiles": "413",
        "partiallyGoodFiles": "0",
        "badFiles": "0",
        "fileName": "ProjectC_JAVASCRIPT_9.3.0.log",
        "createdAt": "2022-07-03T14:24:18.781Z",
        "updatedAt": "2022-07-03T14:24:18.781Z",
        "__v": 0
    },
    {
        "_id": "62c1a692c9602076dc95f170",
        "project": "ProjectC",
        "language": "JAVASCRIPT",
        "version": "9.4.0.log",
        "scanCoverage": "100",
        "scanCoverageLOC": "100",
        "totalFiles": "413",
        "goodFiles": "413",
        "partiallyGoodFiles": "0",
        "badFiles": "0",
        "fileName": "ProjectC_JAVASCRIPT_9.4.0.log",
        "createdAt": "2022-07-03T14:24:18.781Z",
        "updatedAt": "2022-07-03T14:24:18.781Z",
        "__v": 0
    },
    {
        "_id": "62c1a692c9602076dc95f16c",
        "project": "ProjectB",
        "language": "C#",
        "version": "9.3.0.log",
        "scanCoverage": "93.17",
        "scanCoverageLOC": "94.85",
        "totalFiles": "82",
        "goodFiles": "79",
        "partiallyGoodFiles": "1",
        "badFiles": "1",
        "fileName": "ProjectB_C#_9.3.0.log",
        "createdAt": "2022-07-03T14:24:18.780Z",
        "updatedAt": "2022-07-03T14:24:18.780Z",
        "__v": 0
    },
    {
        "_id": "62c1a692c9602076dc95f16d",
        "project": "ProjectB",
        "language": "C#",
        "version": "9.4.0.log",
        "scanCoverage": "99.17",
        "scanCoverageLOC": "99.85",
        "totalFiles": "82",
        "goodFiles": "80",
        "partiallyGoodFiles": "2",
        "badFiles": "0",
        "fileName": "ProjectB_C#_9.4.0.log",
        "createdAt": "2022-07-03T14:24:18.780Z",
        "updatedAt": "2022-07-03T14:24:18.780Z",
        "__v": 0
    }
]


export { titles, aggregated, projecta, all }