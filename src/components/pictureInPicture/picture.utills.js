/** @format */

export const selectMediaStream = async () => {
	try {
		return await navigator.mediaDevices.getDisplayMedia();
	} catch (error) {
		console.log('Some thing wrong ', error);
	}
};
