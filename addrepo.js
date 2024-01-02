w96.sys.execCmd("pkmgr");

setTimeout(async () => {
    w96.WindowSystem.closeAllWindows();

    let a = JSON.parse(await w96.FS.readstr("c:/system/packages/configs/sources.json"));
    a.sources.push("https://ihategithub9000.github.io/w96dos/");

    await w96.FS.writestr("c:/system/packages/configs/sources.json", JSON.stringify(a));
    w96.sys.execCmd("pkmgr");
}, 2000);
