const script = require("reconstructorHandler")

script.handleReconstructor(Blocks.additiveReconstructor, 
	UnitTypes.dagger, ItemStack.with(Items.copper, 80,Items.silicon, 40, Items.graphite, 30),
	UnitTypes.nova, ItemStack.with(Items.titanium, 30,Items.silicon, 50, Items.graphite, 25),
	UnitTypes.crawler, ItemStack.with(Items.lead, 60, Items.silicon, 40, Items.graphite, 30),
	UnitTypes.flare, ItemStack.with(Items.copper, 60, Items.silicon, 40, Items.graphite, 30),
	UnitTypes.mono, ItemStack.with(Items.titanium, 15, Items.silicon, 40, Items.graphite, 30),
	UnitTypes.risso, ItemStack.with(Items.metaglass, 40, Items.silicon, 40, Items.graphite, 30),
	UnitTypes.retusa, ItemStack.with(Items.metaglass, 30, Items.silicon, 40, Items.graphite, 50)
);