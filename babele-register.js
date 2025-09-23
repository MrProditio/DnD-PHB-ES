Hooks.once("init", () => {
  if (typeof Babele !== "undefined") {
    const babele = Babele.get();

    // Registro de dnd-players-handbook
    babele.register({
  module: "phb24-and-modules-es",
      lang: "es",
      dir: "translations/dnd-players-handbook"
    });

    // Registro de dfreds-convenient-effects
    babele.register({
  module: "phb24-and-modules-es",
      lang: "es",
      dir: "translations/dfreds-convenient-effects"
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