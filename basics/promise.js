function complexlogic() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Rafiah',
                id: 10,
                email: 'u2517661@rts-365.dk'
            });
        }, 2000);
    });
}
complexlogic().then((result) => {
    console.log(result);
});

