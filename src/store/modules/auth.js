import AuthServices from '@/services/auth';

const KEY_TOKEN = 'token';
const KEY_NAME = 'name';
const KEY_EMAIL = 'email';
const KEY_ROLE = 'role';

const auth = {
    state: {
        name: localStorage.getItem(KEY_NAME) || '',
        token: localStorage.getItem(KEY_TOKEN) || '',
        email: localStorage.getItem(KEY_EMAIL) || '',
        role: localStorage.getItem(KEY_ROLE) || ''
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token;
        },
        isAdmin(state) {
            return state.role === 'admin';
        },
        token(state) {
            return state.token;
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setName(state, name) {
            state.name = name;
        },
        setEmail(state, email) {
            state.email = email;
        },
        setRole(state, role) {
            state.role = role;
        }
    },
    actions: {
        // credentials = { email: string, password: string }
        // login( context, credentials ) {
        async login({ commit }, credentials) {
            // console.log( context ); // { commit: fn, getters: fn, }
            console.log("store --> ")
            return AuthServices.login(credentials)
                .then(data => {
                    console.log("store --> ", data)
                    const { token, email, role, name } = data

                    localStorage.setItem(KEY_NAME, name);
                    localStorage.setItem(KEY_TOKEN, token);
                    localStorage.setItem(KEY_EMAIL, email);
                    localStorage.setItem(KEY_ROLE, role);

                    commit('setToken', token);
                    commit('setName', name);
                    commit('setEmail', email);
                    commit('setRole', role);

                    return email;
                });
        },
        logout({ commit }) {
            localStorage.removeItem(KEY_TOKEN);
            localStorage.removeItem(KEY_NAME);
            localStorage.removeItem(KEY_EMAIL);
            localStorage.removeItem(KEY_ROLE);

            commit('setToken', '');
            commit('setName', '');
            commit('setEmail', '');
            commit('setRole', '');

            return Promise.resolve();
        }
    }
};

export default auth;