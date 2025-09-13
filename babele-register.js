Hooks.once("init", () => {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: "dnd5e-es",
      lang: "es",
      dir: "lang"
    });
  }
});
