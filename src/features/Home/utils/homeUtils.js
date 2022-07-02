const isListDifferent = (searchValue, latestLogs, filteredLogs) => {

    const projects = latestLogs.map(l => l.project);

    const filteredProjects = filteredLogs
        .map(l => l.project)
        .filter(p => p.toLowerCase().includes(searchValue.toLowerCase()));

    const isListDifferent = JSON.stringify(projects) !== JSON.stringify(filteredProjects);

    return isListDifferent;

}


export { isListDifferent }