const mod = Vars.mods.locateMod("bsm");

mod.meta.displayName = "[#AD33FF]B[#800FFF]e[#AD33FF]tt[#530FFF]er[#800FFF]us[#530FFF]t[#380BA5]ry [#AD33FF]Mo[#800FFF]d";
mod.meta.description = "[red]SPRITERS ARE URGENTLY NEEDED FOR THE MOD!!!\nIf there are any among you, please drop me a line...[]\n\n[accent]= = = = = О моде / About mod = = = = =[]\n\n[accent]RU:[] [gray]Очень опасный мод, который влияет на баланс и механику игры, добавляет новый контент в виде статус эффектов и оборонительных сооружений (башен, мин и т.д.).\n\nРекомендуется перед установкой сделать сохранение (чтобы откатиться назад), если в случае вам не понравится то, что может сделать данный мод. И лучше в самом деле не рискуйте лишний раз и поверьте на слово: [red]МОД. МЕНЯЕТ. МНОГОЕ.[]\n\n[accent]Важно:[] Описание некоторых юнитов не корректно, либо и вовсе неправильное.\n\n\n\n[accent]ENG:[] A very dangerous mod that affects the balance and mechanics of the game, adds new content in the form of status effects and defensive structures (towers, mines, etc.).\n\n\nPreferably before installing make a save (to roll back), if in case you do not like what this mod can do. And it is better to really do not take unnecessary risks and take my word for it: [red]MOD. CHANGES. MULTIPLE.[]\n\n[accent]Important:[] The description of some units is not correct or even incorrect.\n\n[accent]Special thanks:[]\n[#8100cd]- inflarespirit (eve_light)\n[#fc8e6c]- ARmOrDer\n[#8F00B8]- 6matie9 (.miaofficial.)";
mod.meta.author = "[accent]D[#9E5F00]&[accent]X";

Blocks.foreshadow.removeConsumer(Blocks.foreshadow.coolant);
Blocks.foreshadow.coolant = null;
Blocks.foreshadow.buildType = () => extend(ItemTurret.ItemTurretBuild, Blocks.foreshadow, {
acceptItem(source, item) {
return (item == Items.blastCompound && this.items.get(item) <= 50) || this.super$acceptItem(source, item);
},
handleItem(source, item) {
if (item == Items.blastCompound) {
this.items.add(item, 1);
} else {
this.super$handleItem(source, item);
}
},
useAmmo() {
this.items.remove(Items.blastCompound, 15);
this.super$useAmmo();
}
});
