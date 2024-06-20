export function findSectionProgress(subsections) {
  let completed = 0;
  for (let i = 0; i < subsections.length; i++) {
    if (subsections[i].completed) completed++;
  }
  return Math.round((completed / subsections.length) * 100);
}

export function findOverallProgress(gymlist) {
  let totalProgress = 0;
  for (let i = 0; i < gymlist.length; i++) {
    totalProgress += gymlist[i].progress;
  }
  return Math.round((totalProgress / (gymlist.length * 100)) * 100);
}
