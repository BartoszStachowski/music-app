import { createStore } from 'vuex';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { auth, usersCollection } from '@/includes/firebase';

export default createStore({
	state: {
		authModalShow: false,
		userLoggedIn: false,
	},
	mutations: {
		toggleAuthModal: (state) => {
			state.authModalShow = !state.authModalShow;
		},
		toggleAuth(state) {
			state.userLoggedIn = !state.userLoggedIn;
		},
	},
	getters: {
		// authModalShow: (state) => state.authModalShow,
	},
	actions: {
		async register({ commit }, payload) {
			const userCred = await createUserWithEmailAndPassword(auth, payload.email, payload.password);

			await usersCollection({
				name: payload.name,
				email: payload.email,
				age: payload.age,
				country: payload.country,
			}, userCred.user.uid);

			const authData = getAuth();
			await updateProfile(authData.currentUser, {
				displayName: payload.name,
			});

			commit('toggleAuth');
		},
		init_login({ commit }) {
			const user = auth.currentUser;
			if (user) {
				commit('toggleAuth');
			}
		},
	},
});
