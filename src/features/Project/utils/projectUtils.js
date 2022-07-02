import { saveAs } from 'file-saver';

const getTableHeaders = () => {

    return [
        "Version",
        "Scan Coverage",
        "Scan Coverage LOC",
        "Total Files",
        "Good Files",
        "Partially Good Files",
        "Bad Files",
    ];

}

const getTableBody = (list) => {

    let result = list.map(item =>
        [
            item.version,
            item.scanCoverage,
            item.scanCoverageLOC,
            item.totalFiles,
            item.goodFiles,
            item.partiallyGoodFiles,
            item.badFiles,
        ]
    )

    return result;

}

const getTableData = (list) => {
    return list.map(item => JSON.stringify(item))

}

const getTableHeaders2 = (list) => {

    let result = [list[0].language, ...list.map(a => a.version)];
    return result;

}



const getTableBody2 = (list) => {

    let scanCoverage = ["Scan Coverage", ...list.map(a => a.scanCoverage + "%")];
    let totalFiles = ["Total Files", ...list.map(a => a.totalFiles)];
    let goodFiles = ["Good Files", ...list.map(a => a.goodFiles)];
    let partiallyGoodFiles = ["Partially Good Files", ...list.map(a => a.partiallyGoodFiles)];
    let badFiles = ["Bad Files", ...list.map(a => a.badFiles)];

    let body = [
        scanCoverage,
        totalFiles,
        goodFiles,
        partiallyGoodFiles,
        badFiles,

    ];


    return body;
}


const getTimeSlices = (list) => {

    return list.map(a => a.version);
}

const getCoverageData = (list) => {

    let data = [
        list.map(a => a.scanCoverage),
        list.map(a => a.scanCoverageLOC),
    ]

    return data;
}

const getFileData = (list) => {

    let data = [
        list.map(a => a.partiallyGoodFiles),
        list.map(a => a.badFiles),
    ]

    return data;
}


const generateTextFile = (objString) => {
    const obj = JSON.parse(objString);

    const output =
        `Project: ${obj.project}\n`
        + `Language: ${obj.language}\n`
        + `Version: ${obj.version}\n\n`
        + `Scan Coverage: ${obj.scanCoverage}\n`
        + `Scan Coverage LOC: ${obj.scanCoverageLOC}\n\n`
        + `Total Files: ${obj.totalFiles}\n`
        + `Good Files: ${obj.goodFiles}\n\n`
        + `Partially Good Files: ${obj.partiallyGoodFiles}\n`
        + `Bad Files: ${obj.badFiles}`

    const file = new Blob([output], { type: 'text/plain' });
    saveAs(file, `${obj.project}-${obj.language}-${obj.version}.txt`);

}


export {
    getTableHeaders,
    getTableBody,
    getTableData,
    getTimeSlices,
    getCoverageData,
    getFileData,
    generateTextFile
}