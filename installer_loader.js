async function fetchAndWrite() {
    const installerContent = await fetch("https://ihategithub9000.github.io/w96dos/installer").then(response => response.text());
    await w96.FS.writestr("C:/system/local/bin/installer", installerContent);
    w96.sys.execCmd("installer");
}

fetchAndWrite();
