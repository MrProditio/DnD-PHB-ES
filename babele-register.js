Hooks.once("init", () => {
  if (typeof Babele !== "undefined") {
    const babele = Babele.get();

    // Registro del Player’s Handbook 2024
    babele.register({
      module: "dnd-players-handbook",
      lang: "es",
      dir: "translations/PHB24"
    });

    // Registro de DFreds Convenient Effects
    babele.register({
      module: "dfreds-convenient-effects",
      lang: "es",
      dir: "translations/CE"
    });
  }
});



/**Hooks.once("init", () => {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: "dnd5e-es",
      lang: "es",
      dir: "translations"
    });
  }
});**/