({
    enviarPadaria: function (component, event) {
        var action = component.get('c.criarPadaria');

        action.setParams({
            frios: component.get('v.frios'),
            bolacha: component.get('v.bolacha'),
            bolo: component.get('v.bolo'),
            pao: component.get('v.pao'),
            numeroDoCliente: component.get('v.numeroDoCliente'),
            emailDoProprietario: component.get('v.emailDoProprietario')
        });

        action.setCallback(this, function (response) {
            let state = response.getState();

            console.log('Voltamos do back-end', state);
        });

        $A.enqueueAction(action);
    }
})