// import { EffectBase } from './EffectBase.js';
import EffectBase from './EffectBase.js' 
var _Shaders = {
    
};

function CreatTest(config) {
    EffectBase.call(this, config);

    this.test();

    this.animate = function(dt) {
        
    };

}

CreatTest.prototype = Object.assign(Object.create(EffectBase.prototype), {

    constructor: CreatTest,

    onMouseIn: function(e, intersects) {
        console.log( '--onMouseIn--', e, intersects);
    },
    onMouseOut: function(e, intersects, key) {
        console.log( '--onMouseOut--', e, intersects, key);
    },
    onMouseDown: function(e, intersects) {
        console.log( '--onMouseDown--', e, intersects);
    },
    onDblclick: function(e, intersects) {
        console.log( '--onDblclick--', e, intersects);
    },

    test: function() {
        this.group.add( new THREE.GridHelper(1500, 50, 0x29292C, 0x29292C) );

        const plane = new THREE.Mesh(this.geo.box(100, 100, 100), this.mtl.basic({
            color: 0xffff00, transparent: true, opacity: 0.8
        }));

        this.eventArray.push(plane);
        this.group.add(plane);
    }
	
});
 
// export { CreatTest };
export default CreatTest;