export const selectToken = (state) => state.auth.token;
export const selectAvatarUrl = (state) => state.auth.userData.avatarURL;
export const selectUsername = (state) => state.auth.userData.username;
export const selectUserEmail = (state) => state.auth.userData.email;
export const selectUserGender = (state) => state.auth.userData.gender;
export const selectOpenModal = (state) => state.auth.openModal;
export const selectModalContent = (state) => state.auth.modalContent;
export const selectDailyNorma = (state) => state.auth.userData.dailyNorma;
export const selectTodayWater = (state) => state.auth.water.todayWater;
export const selectMonthWater = (state) => state.auth.water.monthWater;
export const selectLoader = (state) => state.auth.isLoading;
export const selectIdForEditDelete = (state) => state.auth.idForEditDelete;
export const selectChooseDate = (state) => state.auth.chooseDate;
