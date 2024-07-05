const mod = Vars.mods.locateMod("bsm");
mod.meta.displayName = "[#e0b28d]B[#9b928b]e[#666666]tt[#e0b28d]er[#9b928b]us[#666666]t[#9b928b]ry M[#666666]o[#e0b28d]d";
mod.meta.description = "[accent]RU:[] [gray]Очень опасный мод, который влияет на баланс и механику игры, добавляет новый контент в виде статус эффектов и оборонительных сооружений (башен, мин и т.д.).\n\nРекомендуется перед установкой сделать сохранение (чтобы откатиться назад), если в случае вам не понравится то, что может сделать данный мод. И лучше в самом деле не рискуйте лишний раз и поверьте на слово: [red]МОД. МЕНЯЕТ. МНОГОЕ.[]\n\n\n\n[accent]ENG:[] A very dangerous mod that affects the balance and mechanics of the game, adds new content in the form of status effects and defensive structures (towers, mines, etc.).\n\n\nPreferably before installing make a save (to roll back), if in case you do not like what this mod can do. And it is better to really do not take unnecessary risks and take my word for it: [red]MOD. CHANGES. MULTIPLE.[]\n\n[accent]BDSM mod test subjects:[]\n[#8F00B8]- .miaofficial.\n[#8100cd]- eve_light.";
mod.meta.author = "[accent]D&X";

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
