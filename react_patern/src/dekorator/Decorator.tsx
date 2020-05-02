
function d() {
    console.log("f(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called",target,propertyKey,descriptor);
    }
}


export class C {
    @d()
    method2(name:string) {
        console.log("gg");
    }
}