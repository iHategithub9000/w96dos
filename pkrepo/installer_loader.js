async function fetchAndWrite() {
    operation=new w96.ui.OperationDialog({"canCancel":false,"text":"Downloading installer from https://ihategithub9000.github.io/w96dos/pkrepo/installer..","animation":"delete","title":"Deleting.."})
    const installerContent = await fetch("https://ihategithub9000.github.io/w96dos/pkrepo/installer").then(response => response.text());
    await w96.FS.writestr("C:/system/local/bin/installer", installerContent);
    operation.close();
    w96.sys.execCmd("installer");
}

fetchAndWrite();
