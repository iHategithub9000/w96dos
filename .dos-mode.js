w96.evt.sys.on("init-complete", async () => {
  const saturateValue = await w96.FS.readstr("C:/.dosdata/sat");
  const appname = await w96.FS.readstr("C:/.dosdata/appname");
  document.querySelectorAll("*").forEach((e)=>{e.style.filter=`saturate(${saturateValue}%)`;});
  if(await w96.FS.readstr("C:/.dosdata/shterminate") === "yes"){
    const shellProcess = w96.state.processes.find(e => e && e.title === "shell36");
    if(shellProcess) shellProcess.terminate();
  }
  w96.sys.execCmd(appname);
});