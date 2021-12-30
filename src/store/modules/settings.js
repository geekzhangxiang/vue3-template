const state=()=>({
    device: 'desktop',
});

const getters={
    device: (state)=>state.device,
};

const mutations={
    toggleDevice(state, device) {
        state.device = device
      },
};

const actions={
    toggleDevice({ commit }, device) {
        commit('toggleDevice', device)
      },
    //   async resetAll({ dispatch }) {
    //     await dispatch('setAccessToken', '')
    //     await dispatch('acl/setFull', false, { root: true })
    //     await dispatch('acl/setRole', [], { root: true })
    //     await dispatch('acl/setAbility', [], { root: true })
        
    //   },
};


export default { state, getters, mutations, actions }