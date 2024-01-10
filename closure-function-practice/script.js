// Shadow Clone Technique
const createShadowClone = function (cloneCount) {
	cloneCount = 0;
	return function () {
		cloneCount++;
		console.log(cloneCount);
	};
};
const shadowCloneJutsu = createShadowClone(1);
shadowCloneJutsu();
shadowCloneJutsu();
