const { Arquiteto } = require('./arquiteto');
const { Engenheiro } = require('./engenheiro');

class Projeto {
    #id;
    #technicalManager;
    #architect
    address;
    serviceProvider;
    status;
    listMaintenance = [];

    constructor(id, technicalManager, architect, address, serviceProvider, status, maintenanceList) {
        if (!(technicalManager instanceof Engenheiro)) {
            throw new Error("Informe um responsável técnico válido!");
        }

        if (!(architect instanceof Arquiteto)) {
            throw new Error("Informe um responsável técnico válido!");
        }

        if (!id || !technicalManager || !address ) {
            throw new Error("Dados inválidos!");
        }
        this.#id = id;
        this.#technicalManager = technicalManager;
        this.#architect = architect;
        this.address = address;
        this.serviceProvider = serviceProvider;
        this.status = status;
        this.listMaintenance = this.listMaintenance;

        if(maintenanceList){
            this.listMaintenance.push(maintenanceList)
        }
    }

    get id() {
        return this.#id;
    }

    get technicalManager() {
        return this.#technicalManager;
    }
    
    get address() {
        return this.address;
    }
    
    set address(newAddress) {
        return this.address = newAddress;
    }
    
    get serviceProvider() {
        return this.serviceProvider;
    }
    
    set serviceProvider(name) {
        return this.serviceProvider = name;
    }
    
    get status() {
        return this.status;
    }
    
    set status(newStatus) {
        return this.status = newStatus;
    }

    addMaintenance(date, service){
        this.listMaintenance.push({date,service});
    }

    getAllMaintenance(){
        return this.listMaintenance;
    }

}

module.exports = {
    Projeto
}
