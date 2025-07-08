(async () => {
    try {
        const token = window.location.pathname.split('/')[3];
        const id = window.location.pathname.split('/')[2]; 
        const { data } = await axios.patch (`/api/users/${id}/${token}`);
        console.log(data);
    } catch (error) {
        console.log(error.response.data.error);

    }
})();