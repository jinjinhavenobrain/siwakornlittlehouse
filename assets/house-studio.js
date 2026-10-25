(()=>{var Fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hd=0,ah=1,ud=2;var lh=1,nl=2,jn=3,di=0,tn=1,Pe=2,fi=0,ns=1,ch=2,hh=3,uh=4,dd=5,Ri=100,fd=101,pd=102,md=103,gd=104,_d=200,xd=201,yd=202,vd=203,Sa=204,wa=205,bd=206,Md=207,Sd=208,wd=209,Td=210,Ed=211,Ad=212,Cd=213,Rd=214,il=0,sl=1,rl=2,is=3,ol=4,al=5,ll=6,cl=7,dh=0,Id=1,Pd=2,pi=0,Dd=1,Ld=2,Ud=3,Mo=4,Nd=5,Fd=6,Od=7;var fh=300,fs=301,ps=302,hl=303,ul=304,So=306,Zs=1e3,Ci=1001,Ta=1002,yn=1003,Bd=1004;var wo=1005;var Dn=1006,dl=1007;var Bi=1008;var On=1009,ph=1010,mh=1011,ur=1012,fl=1013,zi=1014,Qn=1015,dr=1016,pl=1017,ml=1018,fr=1020,gh=35902,_h=35899,xh=1021,yh=1022,bn=1023,Js=1026,pr=1027,vh=1028,gl=1029,bh=1030,_l=1031;var xl=1033,To=33776,Eo=33777,Ao=33778,Co=33779,yl=35840,vl=35841,bl=35842,Ml=35843,Sl=36196,wl=37492,Tl=37496,El=37808,Al=37809,Cl=37810,Rl=37811,Il=37812,Pl=37813,Dl=37814,Ll=37815,Ul=37816,Nl=37817,Fl=37818,Ol=37819,Bl=37820,zl=37821,kl=36492,Vl=36494,Hl=36495,Gl=36283,Wl=36284,Xl=36285,ql=36286;var Vr=2300,Ea=2301,Ma=2302,Zc=2400,Jc=2401,Kc=2402;var zd=3200,kd=3201;var Mh=0,Vd=1,mi="",ke="srgb",ss="srgb-linear",Hr="linear",he="srgb";var ts=7680;var jc=519,Hd=512,Gd=513,Wd=514,Sh=515,Xd=516,qd=517,Yd=518,$d=519,Aa=35044;var wh="300 es",Pn=2e3,Gr=2001;var $n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pu=1234567,Or=Math.PI/180,Ks=180/Math.PI;function Yn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function Th(i,t){return(i%t+t)%t}function Rp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ip(i,t,e){return i!==t?(e-i)/(t-i):0}function Br(i,t,e){return(1-e)*i+e*t}function Pp(i,t,e,n){return Br(i,t,1-Math.exp(-e*n))}function Dp(i,t=1){return t-Math.abs(Th(i,t*2)-t)}function Lp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Up(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Fp(i,t){return i+Math.random()*(t-i)}function Op(i){return i*(.5-Math.random())}function Bp(i){i!==void 0&&(Pu=i);let t=Pu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zp(i){return i*Or}function kp(i){return i*Ks}function Vp(i){return(i&i-1)===0&&i!==0}function Hp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var mr={DEG2RAD:Or,RAD2DEG:Ks,generateUUID:Yn,clamp:Qt,euclideanModulo:Th,mapLinear:Rp,inverseLerp:Ip,lerp:Br,damp:Pp,pingpong:Dp,smoothstep:Lp,smootherstep:Up,randInt:Np,randFloat:Fp,randFloatSpread:Op,seededRandom:Bp,degToRad:zp,radToDeg:kp,isPowerOfTwo:Vp,ceilPowerOfTwo:Hp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Wp,normalize:le,denormalize:In},ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==m){let g=1-a,p=c*f+l*d+h*m+u*_,v=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let C=Math.sqrt(b),R=Math.atan2(C,p*v);g=Math.sin(g*R)/C,a=Math.sin(a*R)/C}let x=a*v;if(c=c*g+f*x,l=l*g+d*x,h=h*g+m*x,u=u*g+_*x,g===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-a*d,t[e+2]=l*m+h*d+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Du.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bc.copy(this).projectOnVector(t),this.sub(bc)}reflect(t){return this.sub(bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new I,Du=new vn,Jt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],v=s[1],b=s[4],x=s[7],C=s[2],R=s[5],U=s[8];return r[0]=o*_+a*v+c*C,r[3]=o*g+a*b+c*R,r[6]=o*p+a*x+c*U,r[1]=l*_+h*v+u*C,r[4]=l*g+h*b+u*R,r[7]=l*p+h*x+u*U,r[2]=f*_+d*v+m*C,r[5]=f*g+d*b+m*R,r[8]=f*p+d*x+m*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mc.makeScale(t,e)),this}rotate(t){return this.premultiply(Mc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mc=new Jt;function Eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){let i=Wr("canvas");return i.style.display="block",i}var Lu={};function js(i){i in Lu||(Lu[i]=!0,console.warn(i))}function Jd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uu=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xp(){let i={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ss]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var ne=Xp();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ds,Ca=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=Wr("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qp=0,Qs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sc(s[o].image)):r.push(Sc(s[o]))}else r=Sc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yp=0,wc=new I,rn=class i extends $n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ci,s=Ci,r=Dn,o=Bi,a=bn,c=On,l=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Yn(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zs:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zs:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=fh;rn.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,x=(d+1)/2,C=(p+1)/2,R=(h+f)/4,U=(u+_)/4,N=(m+g)/4;return b>x&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=U/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=N/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=U/r,s=N/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ra=class extends $n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new rn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends Ra{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ia=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(t.matrixWorld),this.union(Jo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),Ko.subVectors(this.max,Ar),Ls.subVectors(t.a,Ar),Us.subVectors(t.b,Ar),Ns.subVectors(t.c,Ar),Mi.subVectors(Us,Ls),Si.subVectors(Ns,Us),Ji.subVectors(Ls,Ns);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Ji.z,Ji.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Ji.z,0,-Ji.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Ji.y,Ji.x,0];return!Tc(e,Ls,Us,Ns,Ko)||(e=[1,0,0,0,1,0,0,0,1],!Tc(e,Ls,Us,Ns,Ko))?!1:(jo.crossVectors(Mi,Si),e=[jo.x,jo.y,jo.z],Tc(e,Ls,Us,Ns,Ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new I,new I,new I,new I,new I,new I,new I,new I],An=new I,Jo=new Ln,Ls=new I,Us=new I,Ns=new I,Mi=new I,Si=new I,Ji=new I,Ar=new I,Ko=new I,jo=new I,Ki=new I;function Tc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=t.dot(Ki),l=e.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $p=new Ln,Cr=new I,Ec=new I,rs=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$p.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(Ec)),this.expandByPoint(Cr.copy(t.center).sub(Ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},oi=new I,Ac=new I,Qo=new I,wi=new I,Cc=new I,ta=new I,Rc=new I,Ii=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ac.copy(t).add(e).multiplyScalar(.5),Qo.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(Ac);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Qo),a=wi.dot(this.direction),c=-wi.dot(Qo),l=wi.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ac).addScaledVector(Qo,f),d}intersectSphere(t,e){oi.subVectors(t.center,this.origin);let n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,n,s,r){Cc.subVectors(e,t),ta.subVectors(n,t),Rc.crossVectors(Cc,ta);let o=this.direction.dot(Rc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,t);let c=a*this.direction.dot(ta.crossVectors(wi,ta));if(c<0)return null;let l=a*this.direction.dot(Cc.cross(wi));if(l<0||c+l>o)return null;let h=-a*wi.dot(Rc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,m,_,g)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,m=l*h,_=l*u;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,m=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zp,t,Jp)}lookAt(t,e,n){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ti.crossVectors(n,hn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ti.crossVectors(n,hn)),Ti.normalize(),ea.crossVectors(hn,Ti),s[0]=Ti.x,s[4]=ea.x,s[8]=hn.x,s[1]=Ti.y,s[5]=ea.y,s[9]=hn.y,s[2]=Ti.z,s[6]=ea.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],b=n[7],x=n[11],C=n[15],R=s[0],U=s[4],N=s[8],S=s[12],M=s[1],L=s[5],V=s[9],E=s[13],O=s[2],z=s[6],B=s[10],J=s[14],G=s[3],P=s[7],q=s[11],A=s[15];return r[0]=o*R+a*M+c*O+l*G,r[4]=o*U+a*L+c*z+l*P,r[8]=o*N+a*V+c*B+l*q,r[12]=o*S+a*E+c*J+l*A,r[1]=h*R+u*M+f*O+d*G,r[5]=h*U+u*L+f*z+d*P,r[9]=h*N+u*V+f*B+d*q,r[13]=h*S+u*E+f*J+d*A,r[2]=m*R+_*M+g*O+p*G,r[6]=m*U+_*L+g*z+p*P,r[10]=m*N+_*V+g*B+p*q,r[14]=m*S+_*E+g*J+p*A,r[3]=v*R+b*M+x*O+C*G,r[7]=v*U+b*L+x*z+C*P,r[11]=v*N+b*V+x*B+C*q,r[15]=v*S+b*E+x*J+C*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=u*g*l-_*f*l+_*c*d-a*g*d-u*c*p+a*f*p,b=m*f*l-h*g*l-m*c*d+o*g*d+h*c*p-o*f*p,x=h*_*l-m*u*l+m*a*d-o*_*d-h*a*p+o*u*p,C=m*u*c-h*_*c-m*a*f+o*_*f+h*a*g-o*u*g,R=e*v+n*b+s*x+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/R;return t[0]=v*U,t[1]=(_*f*r-u*g*r-_*s*d+n*g*d+u*s*p-n*f*p)*U,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*p+n*c*p)*U,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*U,t[4]=b*U,t[5]=(h*g*r-m*f*r+m*s*d-e*g*d-h*s*p+e*f*p)*U,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*U,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*U,t[8]=x*U,t[9]=(m*u*r-h*_*r-m*n*d+e*_*d+h*n*p-e*u*p)*U,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*p+e*a*p)*U,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*U,t[12]=C*U,t[13]=(h*_*s-m*u*s+m*n*f-e*_*f-h*n*g+e*u*g)*U,t[14]=(m*a*s-o*_*s-m*n*c+e*_*c+o*n*g-e*a*g)*U,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,_=o*h,g=o*u,p=a*u,v=c*l,b=c*h,x=c*u,C=n.x,R=n.y,U=n.z;return s[0]=(1-(_+p))*C,s[1]=(d+x)*C,s[2]=(m-b)*C,s[3]=0,s[4]=(d-x)*R,s[5]=(1-(f+p))*R,s[6]=(g+v)*R,s[7]=0,s[8]=(m+b)*U,s[9]=(g-v)*U,s[10]=(1-(f+_))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Fs.set(s[0],s[1],s[2]).length(),o=Fs.set(s[4],s[5],s[6]).length(),a=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let l=1/r,h=1/o,u=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Pn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Gr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Pn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Gr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fs=new I,Cn=new _e,Zp=new I(0,0,0),Jp=new I(1,1,1),Ti=new I,ea=new I,hn=new I,Fu=new _e,Ou=new vn,Un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kp=0,Bu=new I,Os=new vn,ai=new _e,na=new I,Rr=new I,jp=new I,Qp=new vn,zu=new I(1,0,0),ku=new I(0,1,0),Vu=new I(0,0,1),Hu={type:"added"},tm={type:"removed"},Bs={type:"childadded",child:null},Ic={type:"childremoved",child:null},He=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Un,n=new vn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(zu,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zu,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?na.copy(t):na.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Rr,na,this.up):ai.lookAt(na,Rr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(ai),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tm),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Qp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};He.DEFAULT_UP=new I(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new I,li=new I,Pc=new I,ci=new I,zs=new I,ks=new I,Gu=new I,Dc=new I,Lc=new I,Uc=new I,Nc=new ce,Fc=new ce,Oc=new ce,hi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),li.subVectors(n,e),Pc.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(li),c=Rn.dot(Pc),l=li.dot(li),h=li.dot(Pc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(o,ci.y),c.addScaledVector(a,ci.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Nc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Nc.fromBufferAttribute(t,e),Fc.fromBufferAttribute(t,n),Oc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Nc,r.x),o.addScaledVector(Fc,r.y),o.addScaledVector(Oc,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),li.subVectors(t,e),Rn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Rn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,n),ks.subVectors(r,n),Dc.subVectors(t,n);let c=zs.dot(Dc),l=ks.dot(Dc);if(c<=0&&l<=0)return e.copy(n);Lc.subVectors(t,s);let h=zs.dot(Lc),u=ks.dot(Lc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(zs,o);Uc.subVectors(t,r);let d=zs.dot(Uc),m=ks.dot(Uc);if(m>=0&&d<=m)return e.copy(r);let _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ks,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Gu.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Gu,a);let p=1/(g+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(zs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Th(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Bc(o,r,t+1/3),this.g=Bc(o,r,t),this.b=Bc(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=Kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ne.workingToColorSpace(Ye.copy(this),t),Math.round(Qt(Ye.r*255,0,255))*65536+Math.round(Qt(Ye.g*255,0,255))*256+Math.round(Qt(Ye.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=ke){ne.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(ia);let n=Br(Ei.h,ia.h,e),s=Br(Ei.s,ia.s,e),r=Br(Ei.l,ia.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new Gt;Gt.NAMES=Kd;var em=0,Jn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=ns,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=wa,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pi=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new I,sa=new ut,nm=0,Qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Aa&&(t.usage=this.usage),t}};var qr=class extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yr=class extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},im=0,xn=new _e,zc=new He,Vs=new I,un=new Ln,Ir=new Ln,ze=new I,Te=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Yr:qr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return zc.lookAt(t),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(un.min,Ir.min),un.expandByPoint(ze),ze.addVectors(un.max,Ir.max),un.expandByPoint(ze)):(un.expandByPoint(Ir.min),un.expandByPoint(Ir.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(t,l),ze.add(Vs)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new I,c[N]=new I;let l=new I,h=new I,u=new I,f=new ut,d=new ut,m=new ut,_=new I,g=new I;function p(N,S,M){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[N].add(_),a[S].add(_),a[M].add(_),c[N].add(g),c[S].add(g),c[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let N=0,S=v.length;N<S;++N){let M=v[N],L=M.start,V=M.count;for(let E=L,O=L+V;E<O;E+=3)p(t.getX(E+0),t.getX(E+1),t.getX(E+2))}let b=new I,x=new I,C=new I,R=new I;function U(N){C.fromBufferAttribute(s,N),R.copy(C);let S=a[N];b.copy(S),b.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(R,S);let L=x.dot(c[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,L)}for(let N=0,S=v.length;N<S;++N){let M=v[N],L=M.start,V=M.count;for(let E=L,O=L+V;E<O;E+=3)U(t.getX(E+0)),U(t.getX(E+1)),U(t.getX(E+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new Qe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wu=new _e,ji=new Ii,ra=new rs,Xu=new I,oa=new I,aa=new I,la=new I,kc=new I,ca=new I,qu=new I,ha=new I,oe=class extends He{constructor(t=new Te,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ca.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(kc.fromBufferAttribute(u,t),o?ca.addScaledVector(kc,h):ca.addScaledVector(kc.sub(e),h))}e.add(ca)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(ra.containsPoint(ji.origin)===!1&&(ji.intersectSphere(ra,Xu)===null||ji.origin.distanceToSquared(Xu)>(t.far-t.near)**2))&&(Wu.copy(r).invert(),ji.copy(t.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,C=b;x<C;x+=3){let R=a.getX(x),U=a.getX(x+1),N=a.getX(x+2);s=ua(this,p,t,n,l,h,u,R,U,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let v=a.getX(g),b=a.getX(g+1),x=a.getX(g+2);s=ua(this,o,t,n,l,h,u,v,b,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,C=b;x<C;x+=3){let R=x,U=x+1,N=x+2;s=ua(this,p,t,n,l,h,u,R,U,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let v=g,b=g+1,x=g+2;s=ua(this,o,t,n,l,h,u,v,b,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function sm(i,t,e,n,s,r,o,a){let c;if(t.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===di,a),c===null)return null;ha.copy(a),ha.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ha);return l<e.near||l>e.far?null:{distance:l,point:ha.clone(),object:i}}function ua(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,oa),i.getVertexPosition(c,aa),i.getVertexPosition(l,la);let h=sm(i,t,e,n,oa,aa,la,qu);if(h){let u=new I;hi.getBarycoord(qu,oa,aa,la,u),s&&(h.uv=hi.getInterpolatedAttribute(s,a,c,l,u,new ut)),r&&(h.uv1=hi.getInterpolatedAttribute(r,a,c,l,u,new ut)),o&&(h.normal=hi.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new I,materialIndex:0};hi.getNormal(oa,aa,la,f.normal),h.face=f,h.barycoord=u}return h}var Kn=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function m(_,g,p,v,b,x,C,R,U,N,S){let M=x/U,L=C/N,V=x/2,E=C/2,O=R/2,z=U+1,B=N+1,J=0,G=0,P=new I;for(let q=0;q<B;q++){let A=q*L-E;for(let F=0;F<z;F++){let $=F*M-V;P[_]=$*v,P[g]=A*b,P[p]=O,l.push(P.x,P.y,P.z),P[_]=0,P[g]=0,P[p]=R>0?1:-1,h.push(P.x,P.y,P.z),u.push(F/U),u.push(1-q/N),J+=1}}for(let q=0;q<N;q++)for(let A=0;A<U;A++){let F=f+A+z*q,$=f+A+z*(q+1),Mt=f+(A+1)+z*(q+1),at=f+(A+1)+z*q;c.push(F,$,at),c.push($,Mt,at),G+=6}a.addGroup(d,G,S),d+=G,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=ms(i[e]);for(let s in n)t[s]=n[s]}return t}function rm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ah(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var jd={clone:ms,merge:Ze},om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},$r=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ai=new I,Yu=new ut,$u=new ut,Ve=class extends $r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,Yu,$u),e.subVectors($u,Yu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hs=-90,Gs=1,Pa=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Hs,Gs,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Hs,Gs,t,e);r.layers=this.layers,this.add(r);let o=new Ve(Hs,Gs,t,e);o.layers=this.layers,this.add(o);let a=new Ve(Hs,Gs,t,e);a.layers=this.layers,this.add(a);let c=new Ve(Hs,Gs,t,e);c.layers=this.layers,this.add(c);let l=new Ve(Hs,Gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Zr=class extends rn{constructor(t=[],e=fs,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Da=class extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Kn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:fi});r.uniforms.tEquirect.value=e;let o=new oe(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=Dn),new Pa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Lt=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},lm={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Jr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nr=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},La=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Aa,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new I,Kr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ir=class extends Jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ws,Pr=new I,Xs=new I,qs=new I,Ys=new ut,Dr=new ut,Qd=new _e,da=new I,Lr=new I,fa=new I,Zu=new ut,Vc=new ut,Ju=new ut,jr=class extends He{constructor(t=new ir){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new La(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new Kr(n,3,0,!1)),Ws.setAttribute("uv",new Kr(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new ut(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Qd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;pa(da.set(-.5,-.5,0),qs,o,Xs,s,r),pa(Lr.set(.5,-.5,0),qs,o,Xs,s,r),pa(fa.set(.5,.5,0),qs,o,Xs,s,r),Zu.set(0,0),Vc.set(1,0),Ju.set(1,1);let a=t.ray.intersectTriangle(da,Lr,fa,!1,Pr);if(a===null&&(pa(Lr.set(-.5,.5,0),qs,o,Xs,s,r),Vc.set(0,1),a=t.ray.intersectTriangle(da,fa,Lr,!1,Pr),a===null))return;let c=t.ray.origin.distanceTo(Pr);c<t.near||c>t.far||e.push({distance:c,point:Pr.clone(),uv:hi.getInterpolation(Pr,da,Lr,fa,Zu,Vc,Ju,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pa(i,t,e,n,s,r){Ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Dr.x=r*Ys.x-s*Ys.y,Dr.y=s*Ys.x+r*Ys.y):Dr.copy(Ys),i.copy(t),i.x+=Dr.x,i.y+=Dr.y,i.applyMatrix4(Qd)}var Hc=new I,cm=new I,hm=new Jt,sn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hc.subVectors(n,e).cross(cm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hm.getNormalMatrix(t),s=this.coplanarPoint(Hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new rs,um=new ut(.5,.5),ma=new I,sr=class{constructor(t=new sn,e=new sn,n=new sn,s=new sn,r=new sn,o=new sn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],v=r[12],b=r[13],x=r[14],C=r[15];if(s[0].setComponents(l-o,d-h,p-m,C-v).normalize(),s[1].setComponents(l+o,d+h,p+m,C+v).normalize(),s[2].setComponents(l+a,d+u,p+_,C+b).normalize(),s[3].setComponents(l-a,d-u,p-_,C-b).normalize(),n)s[4].setComponents(c,f,g,x).normalize(),s[5].setComponents(l-c,d-f,p-g,C-x).normalize();else if(s[4].setComponents(l-c,d-f,p-g,C-x).normalize(),e===Pn)s[5].setComponents(l+c,d+f,p+g,C+x).normalize();else if(e===Gr)s[5].setComponents(c,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);let e=um.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fn=class extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ua=new I,Na=new I,Ku=new _e,Ur=new Ii,ga=new rs,Gc=new I,ju=new I,Di=class extends He{constructor(t=new Te,e=new Fn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ua.fromBufferAttribute(e,s-1),Na.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ua.distanceTo(Na);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;Ku.copy(s).invert(),Ur.copy(t.ray).applyMatrix4(Ku);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=l){let p=h.getX(_),v=h.getX(_+1),b=_a(this,t,Ur,c,p,v,_);b&&e.push(b)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(d),p=_a(this,t,Ur,c,_,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=l){let p=_a(this,t,Ur,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=_a(this,t,Ur,c,m-1,d,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _a(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ua.fromBufferAttribute(a,s),Na.fromBufferAttribute(a,r),e.distanceSqToSegment(Ua,Na,Gc,ju)>n)return;Gc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Gc);if(!(l<t.near||l>t.far))return{distance:l,point:ju.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Qu=new I,td=new I,Qr=class extends Di{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Qu.fromBufferAttribute(e,s),td.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qu.distanceTo(td);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var os=class extends rn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},to=class extends rn{constructor(t,e,n=zi,s,r,o,a=yn,c=yn,l,h=Js,u=1){if(h!==Js&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},eo=class extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var no=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,_=[],g=n/2,p=0;v(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function v(){let x=new I,C=new I,R=0,U=(e-t)/n;for(let N=0;N<=r;N++){let S=[],M=N/r,L=M*(e-t)+t;for(let V=0;V<=s;V++){let E=V/s,O=E*c+a,z=Math.sin(O),B=Math.cos(O);C.x=L*z,C.y=-M*n+g,C.z=L*B,u.push(C.x,C.y,C.z),x.set(z,U,B).normalize(),f.push(x.x,x.y,x.z),d.push(E,1-M),S.push(m++)}_.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){let M=_[S][N],L=_[S+1][N],V=_[S+1][N+1],E=_[S][N+1];(t>0||S!==0)&&(h.push(M,L,E),R+=3),(e>0||S!==r-1)&&(h.push(L,V,E),R+=3)}l.addGroup(p,R,0),p+=R}function b(x){let C=m,R=new ut,U=new I,N=0,S=x===!0?t:e,M=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),m++;let L=m;for(let V=0;V<=s;V++){let O=V/s*c+a,z=Math.cos(O),B=Math.sin(O);U.x=S*B,U.y=g*M,U.z=S*z,u.push(U.x,U.y,U.z),f.push(0,M,0),R.x=z*.5+.5,R.y=B*.5*M+.5,d.push(R.x,R.y),m++}for(let V=0;V<s;V++){let E=C+V,O=L+V;x===!0?h.push(O,O+1,E):h.push(O+1,O,E),N+=3}l.addGroup(p,N,x===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Fa=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new I,x=new I,C=new I;for(let R=0;R<e.length;R+=3)d(e[R+0],b),d(e[R+1],x),d(e[R+2],C),c(b,x,C,v)}function c(v,b,x,C){let R=C+1,U=[];for(let N=0;N<=R;N++){U[N]=[];let S=v.clone().lerp(x,N/R),M=b.clone().lerp(x,N/R),L=R-N;for(let V=0;V<=L;V++)V===0&&N===R?U[N][V]=S:U[N][V]=S.clone().lerp(M,V/L)}for(let N=0;N<R;N++)for(let S=0;S<2*(R-N)-1;S++){let M=Math.floor(S/2);S%2===0?(f(U[N][M+1]),f(U[N+1][M]),f(U[N][M])):(f(U[N][M+1]),f(U[N+1][M+1]),f(U[N+1][M]))}}function l(v){let b=new I;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(v),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){let v=new I;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let x=g(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;o.push(x,1-C)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let b=o[v+0],x=o[v+2],C=o[v+4],R=Math.max(b,x,C),U=Math.min(b,x,C);R>.9&&U<.1&&(b<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,b){let x=v*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function m(){let v=new I,b=new I,x=new I,C=new I,R=new ut,U=new ut,N=new ut;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),R.set(o[M+0],o[M+1]),U.set(o[M+2],o[M+3]),N.set(o[M+4],o[M+5]),C.copy(v).add(b).add(x).divideScalar(3);let L=g(C);_(R,M+0,v,L),_(U,M+2,b,L),_(N,M+4,x,L)}}function _(v,b,x,C){C<0&&v.x===1&&(o[b]=v.x-1),x.x===0&&x.z===0&&(o[b]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ut:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],o=[],a=new I,c=new _e;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},rr=class extends dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends rr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ch(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var xa=new I,Wc=new Ch,Xc=new Ch,qc=new Ch,Ba=class extends dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(xa.subVectors(s[0],s[1]).add(s[0]),l=xa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Wc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,_,g),Xc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,_,g),qc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Xc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),qc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Wc.calc(c),Xc.calc(c),qc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ed(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function dm(i,t){let e=1-i;return e*e*t}function fm(i,t){return 2*(1-i)*i*t}function pm(i,t){return i*i*t}function zr(i,t,e,n){return dm(i,t)+fm(i,e)+pm(i,n)}function mm(i,t){let e=1-i;return e*e*e*t}function gm(i,t){let e=1-i;return 3*e*e*i*t}function _m(i,t){return 3*(1-i)*i*i*t}function xm(i,t){return i*i*i*t}function kr(i,t,e,n,s){return mm(i,t)+gm(i,e)+_m(i,n)+xm(i,s)}var io=class extends dn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends dn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y),kr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},so=class extends dn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends dn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ro=class extends dn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(t,s.x,r.x,o.x),zr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends dn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(t,s.x,r.x,o.x),zr(t,s.y,r.y,o.y),zr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ed(a,c.x,l.x,h.x,u.x),ed(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},Qc=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Ba,CubicBezierCurve:io,CubicBezierCurve3:za,EllipseCurve:rr,LineCurve:so,LineCurve3:ka,QuadraticBezierCurve:ro,QuadraticBezierCurve3:Va,SplineCurve:oo}),Ha=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Qc[s.type]().fromJSON(s))}return this}},ao=class extends Ha{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new so(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ro(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new io(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new oo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new rr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},as=class extends ao{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ao().fromJSON(s))}return this}};function ym(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=tf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=wm(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<c&&(c=m),d>h&&(h=d),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return lo(r,o,e,a,c,l,0),o}function tf(i,t,e,n,s){let r;if(s===Nm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=nd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=nd(o/n|0,i[o],i[o+1],r);return r&&or(r,r.next)&&(ho(r),r=r.next),r}function ls(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(or(e,e.next)||we(e.prev,e,e.next)===0)){if(ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function lo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Rm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?bm(i,n,s,r):vm(i)){t.push(c.i,i.i,l.i),ho(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Mm(ls(i),t),lo(i,t,e,n,s,r,2)):o===2&&Sm(i,t,e,n,s,r):lo(ls(i),t,e,n,s,r,1);break}}}function vm(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Fr(s,a,r,c,o,l,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function bm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(h,u,f),_=Math.max(a,c,l),g=Math.max(h,u,f),p=th(d,m,t,e,n),v=th(_,g,t,e,n),b=i.prevZ,x=i.nextZ;for(;b&&b.z>=p&&x&&x.z<=v;){if(b.x>=d&&b.x<=_&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Fr(a,h,c,u,l,f,b.x,b.y)&&we(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Fr(a,h,c,u,l,f,x.x,x.y)&&we(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=_&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Fr(a,h,c,u,l,f,b.x,b.y)&&we(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Fr(a,h,c,u,l,f,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Mm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!or(n,s)&&nf(n,e,e.next,s)&&co(n,s)&&co(s,n)&&(t.push(n.i,e.i,s.i),ho(e),ho(e.next),e=i=s),e=e.next}while(e!==i);return ls(e)}function Sm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dm(o,a)){let c=sf(o,a);o=ls(o,o.next),c=ls(c,c.next),lo(o,t,e,n,s,r,0),lo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function wm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=tf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Pm(l))}s.sort(Tm);for(let r=0;r<s.length;r++)e=Em(s[r],e);return e}function Tm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Em(i,t){let e=Am(i,t);if(!e)return t;let n=sf(e,i);return ls(n,n.next),ls(e,e.next)}function Am(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(or(i,e))return e;do{if(or(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&ef(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);co(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Cm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Cm(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function Rm(i,t,e,n){let s=i;do s.z===0&&(s.z=th(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Im(s)}function Im(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function th(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ef(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Fr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&ef(i,t,e,n,s,r,o,a)}function Dm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lm(i,t)&&(co(i,t)&&co(t,i)&&Um(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||or(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function or(i,t){return i.x===t.x&&i.y===t.y}function nf(i,t,e,n){let s=va(we(i,t,e)),r=va(we(i,t,n)),o=va(we(e,n,i)),a=va(we(e,n,t));return!!(s!==r&&o!==a||s===0&&ya(i,e,t)||r===0&&ya(i,n,t)||o===0&&ya(e,i,n)||a===0&&ya(e,t,n))}function ya(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function va(i){return i>0?1:i<0?-1:0}function Lm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&nf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function co(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function Um(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function sf(i,t){let e=eh(i.i,i.x,i.y),n=eh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nd(i,t,e,n){let s=eh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Nm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var nh=class{static triangulate(t,e,n=2){return ym(t,e,n)}},es=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];id(t),sd(n,t);let o=t.length;e.forEach(id);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,sd(n,e[c]);let a=nh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function id(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ar=class i extends Te{constructor(t=new as([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Fm,b,x=!1,C,R,U,N;p&&(b=p.getSpacedPoints(h),x=!0,f=!1,C=p.computeFrenetFrames(h,!1),R=new I,U=new I,N=new I),f||(g=0,d=0,m=0,_=0);let S=a.extractPoints(l),M=S.shape,L=S.holes;if(!es.isClockWise(M)){M=M.reverse();for(let ct=0,tt=L.length;ct<tt;ct++){let nt=L[ct];es.isClockWise(nt)&&(L[ct]=nt.reverse())}}function E(ct){let nt=10000000000000001e-36,it=ct[0];for(let xt=1;xt<=ct.length;xt++){let dt=xt%ct.length,bt=ct[dt],$t=bt.x-it.x,qt=bt.y-it.y,T=$t*$t+qt*qt,y=Math.max(Math.abs(bt.x),Math.abs(bt.y),Math.abs(it.x),Math.abs(it.y)),Y=nt*y*y;if(T<=Y){ct.splice(dt,1),xt--;continue}it=bt}}E(M),L.forEach(E);let O=L.length,z=M;for(let ct=0;ct<O;ct++){let tt=L[ct];M=M.concat(tt)}function B(ct,tt,nt){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(tt,nt)}let J=M.length;function G(ct,tt,nt){let it,xt,dt,bt=ct.x-tt.x,$t=ct.y-tt.y,qt=nt.x-ct.x,T=nt.y-ct.y,y=bt*bt+$t*$t,Y=bt*T-$t*qt;if(Math.abs(Y)>Number.EPSILON){let Q=Math.sqrt(y),ht=Math.sqrt(qt*qt+T*T),et=tt.x-$t/Q,Ot=tt.y+bt/Q,vt=nt.x-T/ht,Ut=nt.y+qt/ht,Nt=((vt-et)*T-(Ut-Ot)*qt)/(bt*T-$t*qt);it=et+bt*Nt-ct.x,xt=Ot+$t*Nt-ct.y;let ft=it*it+xt*xt;if(ft<=2)return new ut(it,xt);dt=Math.sqrt(ft/2)}else{let Q=!1;bt>Number.EPSILON?qt>Number.EPSILON&&(Q=!0):bt<-Number.EPSILON?qt<-Number.EPSILON&&(Q=!0):Math.sign($t)===Math.sign(T)&&(Q=!0),Q?(it=-$t,xt=bt,dt=Math.sqrt(y)):(it=bt,xt=$t,dt=Math.sqrt(y/2))}return new ut(it/dt,xt/dt)}let P=[];for(let ct=0,tt=z.length,nt=tt-1,it=ct+1;ct<tt;ct++,nt++,it++)nt===tt&&(nt=0),it===tt&&(it=0),P[ct]=G(z[ct],z[nt],z[it]);let q=[],A,F=P.concat();for(let ct=0,tt=O;ct<tt;ct++){let nt=L[ct];A=[];for(let it=0,xt=nt.length,dt=xt-1,bt=it+1;it<xt;it++,dt++,bt++)dt===xt&&(dt=0),bt===xt&&(bt=0),A[it]=G(nt[it],nt[dt],nt[bt]);q.push(A),F=F.concat(A)}let $;if(g===0)$=es.triangulateShape(z,L);else{let ct=[],tt=[];for(let nt=0;nt<g;nt++){let it=nt/g,xt=d*Math.cos(it*Math.PI/2),dt=m*Math.sin(it*Math.PI/2)+_;for(let bt=0,$t=z.length;bt<$t;bt++){let qt=B(z[bt],P[bt],dt);ot(qt.x,qt.y,-xt),it===0&&ct.push(qt)}for(let bt=0,$t=O;bt<$t;bt++){let qt=L[bt];A=q[bt];let T=[];for(let y=0,Y=qt.length;y<Y;y++){let Q=B(qt[y],A[y],dt);ot(Q.x,Q.y,-xt),it===0&&T.push(Q)}it===0&&tt.push(T)}}$=es.triangulateShape(ct,tt)}let Mt=$.length,at=m+_;for(let ct=0;ct<J;ct++){let tt=f?B(M[ct],F[ct],at):M[ct];x?(U.copy(C.normals[0]).multiplyScalar(tt.x),R.copy(C.binormals[0]).multiplyScalar(tt.y),N.copy(b[0]).add(U).add(R),ot(N.x,N.y,N.z)):ot(tt.x,tt.y,0)}for(let ct=1;ct<=h;ct++)for(let tt=0;tt<J;tt++){let nt=f?B(M[tt],F[tt],at):M[tt];x?(U.copy(C.normals[ct]).multiplyScalar(nt.x),R.copy(C.binormals[ct]).multiplyScalar(nt.y),N.copy(b[ct]).add(U).add(R),ot(N.x,N.y,N.z)):ot(nt.x,nt.y,u/h*ct)}for(let ct=g-1;ct>=0;ct--){let tt=ct/g,nt=d*Math.cos(tt*Math.PI/2),it=m*Math.sin(tt*Math.PI/2)+_;for(let xt=0,dt=z.length;xt<dt;xt++){let bt=B(z[xt],P[xt],it);ot(bt.x,bt.y,u+nt)}for(let xt=0,dt=L.length;xt<dt;xt++){let bt=L[xt];A=q[xt];for(let $t=0,qt=bt.length;$t<qt;$t++){let T=B(bt[$t],A[$t],it);x?ot(T.x,T.y+b[h-1].y,b[h-1].x+nt):ot(T.x,T.y,u+nt)}}}H(),Z();function H(){let ct=s.length/3;if(f){let tt=0,nt=J*tt;for(let it=0;it<Mt;it++){let xt=$[it];_t(xt[2]+nt,xt[1]+nt,xt[0]+nt)}tt=h+g*2,nt=J*tt;for(let it=0;it<Mt;it++){let xt=$[it];_t(xt[0]+nt,xt[1]+nt,xt[2]+nt)}}else{for(let tt=0;tt<Mt;tt++){let nt=$[tt];_t(nt[2],nt[1],nt[0])}for(let tt=0;tt<Mt;tt++){let nt=$[tt];_t(nt[0]+J*h,nt[1]+J*h,nt[2]+J*h)}}n.addGroup(ct,s.length/3-ct,0)}function Z(){let ct=s.length/3,tt=0;st(z,tt),tt+=z.length;for(let nt=0,it=L.length;nt<it;nt++){let xt=L[nt];st(xt,tt),tt+=xt.length}n.addGroup(ct,s.length/3-ct,1)}function st(ct,tt){let nt=ct.length;for(;--nt>=0;){let it=nt,xt=nt-1;xt<0&&(xt=ct.length-1);for(let dt=0,bt=h+g*2;dt<bt;dt++){let $t=J*dt,qt=J*(dt+1),T=tt+it+$t,y=tt+xt+$t,Y=tt+xt+qt,Q=tt+it+qt;zt(T,y,Y,Q)}}}function ot(ct,tt,nt){c.push(ct),c.push(tt),c.push(nt)}function _t(ct,tt,nt){Kt(ct),Kt(tt),Kt(nt);let it=s.length/3,xt=v.generateTopUV(n,s,it-3,it-2,it-1);D(xt[0]),D(xt[1]),D(xt[2])}function zt(ct,tt,nt,it){Kt(ct),Kt(tt),Kt(it),Kt(tt),Kt(nt),Kt(it);let xt=s.length/3,dt=v.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);D(dt[0]),D(dt[1]),D(dt[3]),D(dt[1]),D(dt[2]),D(dt[3])}function Kt(ct){s.push(c[ct*3+0]),s.push(c[ct*3+1]),s.push(c[ct*3+2])}function D(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Om(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qc[s.type]().fromJSON(s)),new i(n,t.options)}},Fm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,c),new ut(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ut(o,1-c),new ut(l,1-u),new ut(f,1-m),new ut(_,1-p)]:[new ut(a,1-c),new ut(h,1-u),new ut(d,1-m),new ut(g,1-p)]}};function Om(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var cs=class i extends Fa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var on=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let v=p*f-o;for(let b=0;b<l;b++){let x=b*u-r;m.push(x,-v,0),_.push(0,0,1),g.push(b/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let b=v+l*p,x=v+l*(p+1),C=v+1+l*(p+1),R=v+1+l*p;d.push(b,x,R),d.push(x,C,R)}this.setIndex(d),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},uo=class i extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new I,m=new ut;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let v=p+g,b=v,x=v+n+1,C=v+n+2,R=v+1;a.push(b,x,R),a.push(x,C,R)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var fo=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,f=new I,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let v=[],b=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let R=C/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(R+x,1-b),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let b=h[p][v+1],x=h[p][v],C=h[p+1][v],R=h[p+1][v+1];(p!==0||o>0)&&d.push(b,x,R),(p!==n-1||c<Math.PI)&&d.push(x,C,R)}this.setIndex(d),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var po=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let _=m/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let _=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,v=(s+1)*d+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var $e=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ga=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wa=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var mo=class extends Fn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function ba(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Bm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,a=2*e-n;break;case Kc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jc:o=t,c=2*n-e;break;case Kc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,b=(-1-d)*g+(1.5+d)*_+.5*m,x=d*g-d*_;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+v*o[l+C]+b*o[c+C]+x*o[u+C];return r}},qa=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Ya=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ba(e,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ba(t.times,Array),values:ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case Ea:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Bm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ma,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[f+m]||_!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Ea;var Li=class extends fn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Vr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="color";var Za=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};Za.prototype.ValueTypeName="number";var Ja=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)vn.slerpFlat(r,0,o,l-a,o,l,c);return r}},go=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends fn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Vr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="vector";var ja=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},rf=new ja,Qa=class{constructor(t){this.manager=t!==void 0?t:rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},cr=class extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Yc=new _e,rd=new I,od=new I,tl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;rd.setFromMatrixPosition(t.matrixWorld),e.position.copy(rd),od.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(od),e.updateMatrixWorld(),Yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ad=new _e,Nr=new I,$c=new I,ih=class extends tl{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Nr),$c.copy(n.position),$c.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($c),n.updateMatrixWorld(),s.makeTranslation(-Nr.x,-Nr.y,-Nr.z),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,n.coordinateSystem,n.reversedDepth)}},Ni=class extends lr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},us=class extends $r{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sh=class extends tl{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new sh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var el=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},_o=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Rh="\\[\\]\\.:\\/",zm=new RegExp("["+Rh+"]","g"),Ih="[^"+Rh+"]",km="[^"+Rh.replace("\\.","")+"]",Vm=/((?:WC+[\/:])*)/.source.replace("WC",Ih),Hm=/(WCOD+)?/.source.replace("WCOD",km),Gm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ih),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ih),Xm=new RegExp("^"+Vm+Hm+Gm+Wm+"$"),qm=["material","materials","bones","map"],rh=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zm,"")}static parseTrackName(t){let e=Xm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=rh;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var av=new Float32Array(1);var ld=new _e,xo=class{constructor(t,e,n=0,s=1/0){this.ray=new Ii(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ld.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ld),this}intersectObject(t,e=!0,n=[]){return oh(t,this,n,e),n.sort(cd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oh(t[s],this,n,e);return n.sort(cd),n}};function cd(i,t){return i.distance-t.distance}function oh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)oh(r[o],t,e,!0)}}var hr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var yo=class extends Qr{constructor(t=10,e=10,n=4473924,s=8947848){n=new Gt(n),s=new Gt(s);let r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,d=0,m=-a;f<=e;f++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);let _=f===r?n:s;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}let h=new Te;h.setAttribute("position",new se(c,3)),h.setAttribute("color",new se(l,3));let u=new Fn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var vo=class extends Qr{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Te;r.setIndex(new Qe(n,1)),r.setAttribute("position",new se(s,3)),super(r,new Fn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}};var bo=class extends $n{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ph(i,t,e,n){let s=Ym(n);switch(e){case xh:return i*t;case vh:return i*t/s.components*s.byteLength;case gl:return i*t/s.components*s.byteLength;case bh:return i*t*2/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case yh:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case To:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:case Ml:return Math.max(i,16)*Math.max(t,8)/4;case yl:case bl:return Math.max(i,8)*Math.max(t,8)/2;case Sl:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kl:case Vl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ym(i){switch(i){case On:case ph:return{byteLength:1,components:1};case ur:case mh:case dr:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case zi:case fl:case Qn:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Rf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zm(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$g=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,__=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,A_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Jm,alphahash_pars_fragment:Km,alphamap_fragment:jm,alphamap_pars_fragment:Qm,alphatest_fragment:tg,alphatest_pars_fragment:eg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:sg,batching_vertex:rg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:lg,iridescence_fragment:cg,bumpmap_pars_fragment:hg,clipping_planes_fragment:ug,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:_g,color_vertex:xg,common:yg,cube_uv_reflection_fragment:vg,defaultnormal_vertex:bg,displacementmap_pars_vertex:Mg,displacementmap_vertex:Sg,emissivemap_fragment:wg,emissivemap_pars_fragment:Tg,colorspace_fragment:Eg,colorspace_pars_fragment:Ag,envmap_fragment:Cg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Ig,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Hg,envmap_vertex:Dg,fog_vertex:Lg,fog_pars_vertex:Ug,fog_fragment:Ng,fog_pars_fragment:Fg,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Bg,lights_lambert_fragment:zg,lights_lambert_pars_fragment:kg,lights_pars_begin:Vg,lights_toon_fragment:Gg,lights_toon_pars_fragment:Wg,lights_phong_fragment:Xg,lights_phong_pars_fragment:qg,lights_physical_fragment:Yg,lights_physical_pars_fragment:$g,lights_fragment_begin:Zg,lights_fragment_maps:Jg,lights_fragment_end:Kg,logdepthbuf_fragment:jg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:s0,map_particle_pars_fragment:r0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:a0,morphinstance_vertex:l0,morphcolor_vertex:c0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:_0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:M0,opaque_fragment:S0,packing:w0,premultiplied_alpha_fragment:T0,project_vertex:E0,dithering_fragment:A0,dithering_pars_fragment:C0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:D0,shadowmap_vertex:L0,shadowmask_pars_fragment:U0,skinbase_vertex:N0,skinning_pars_vertex:F0,skinning_vertex:O0,skinnormal_vertex:B0,specularmap_fragment:z0,specularmap_pars_fragment:k0,tonemapping_fragment:V0,tonemapping_pars_fragment:H0,transmission_fragment:G0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:q0,uv_vertex:Y0,worldpos_vertex:$0,background_vert:Z0,background_frag:J0,backgroundCube_vert:K0,backgroundCube_frag:j0,cube_vert:Q0,cube_frag:t_,depth_vert:e_,depth_frag:n_,distanceRGBA_vert:i_,distanceRGBA_frag:s_,equirect_vert:r_,equirect_frag:o_,linedashed_vert:a_,linedashed_frag:l_,meshbasic_vert:c_,meshbasic_frag:h_,meshlambert_vert:u_,meshlambert_frag:d_,meshmatcap_vert:f_,meshmatcap_frag:p_,meshnormal_vert:m_,meshnormal_frag:g_,meshphong_vert:__,meshphong_frag:x_,meshphysical_vert:y_,meshphysical_frag:v_,meshtoon_vert:b_,meshtoon_frag:M_,points_vert:S_,points_frag:w_,shadow_vert:T_,shadow_frag:E_,sprite_vert:A_,sprite_frag:C_},Et={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ti={basic:{uniforms:Ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Gt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ze([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ze([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Gt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ze([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ze([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ze([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ze([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ze([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ze([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ze([Et.common,Et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ze([Et.lights,Et.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ti.physical={uniforms:Ze([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Yl={r:0,b:0,g:0},gs=new Un,R_=new _e;function I_(i,t,e,n,s,r,o){let a=new Gt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function _(b){let x=!1,C=m(b);C===null?p(a,c):C&&C.isColor&&(p(C,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,x){let C=m(x);C&&(C.isCubeTexture||C.mapping===So)?(h===void 0&&(h=new oe(new Kn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ms(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gs.copy(x.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(R_.makeRotationFromEuler(gs)),h.material.toneMapped=ne.getTransfer(C.colorSpace)!==he,(u!==C||f!==C.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new oe(new on(2,2),new Nn({name:"BackgroundMaterial",uniforms:ms(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ne.getTransfer(C.colorSpace)!==he,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=C,f=C.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,x){b.getRGB(Yl,Ah(i)),n.buffers.color.setClear(Yl.r,Yl.g,Yl.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:_,addToRenderList:g,dispose:v}}function P_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,L,V,E,O){let z=!1,B=u(E,V,L);r!==B&&(r=B,l(r.object)),z=d(M,E,V,O),z&&m(M,E,V,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(M,L,V,E),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,V){let E=V.wireframe===!0,O=n[M.id];O===void 0&&(O={},n[M.id]=O);let z=O[L.id];z===void 0&&(z={},O[L.id]=z);let B=z[E];return B===void 0&&(B=f(c()),z[E]=B),B}function f(M){let L=[],V=[],E=[];for(let O=0;O<e;O++)L[O]=0,V[O]=0,E[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:E,object:M,attributes:{},index:null}}function d(M,L,V,E){let O=r.attributes,z=L.attributes,B=0,J=V.getAttributes();for(let G in J)if(J[G].location>=0){let q=O[G],A=z[G];if(A===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(A=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(A=M.instanceColor)),q===void 0||q.attribute!==A||A&&q.data!==A.data)return!0;B++}return r.attributesNum!==B||r.index!==E}function m(M,L,V,E){let O={},z=L.attributes,B=0,J=V.getAttributes();for(let G in J)if(J[G].location>=0){let q=z[G];q===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));let A={};A.attribute=q,q&&q.data&&(A.data=q.data),O[G]=A,B++}r.attributes=O,r.attributesNum=B,r.index=E}function _(){let M=r.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){let V=r.newAttributes,E=r.enabledAttributes,O=r.attributeDivisors;V[M]=1,E[M]===0&&(i.enableVertexAttribArray(M),E[M]=1),O[M]!==L&&(i.vertexAttribDivisor(M,L),O[M]=L)}function v(){let M=r.newAttributes,L=r.enabledAttributes;for(let V=0,E=L.length;V<E;V++)L[V]!==M[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function b(M,L,V,E,O,z,B){B===!0?i.vertexAttribIPointer(M,L,V,O,z):i.vertexAttribPointer(M,L,V,E,O,z)}function x(M,L,V,E){_();let O=E.attributes,z=V.getAttributes(),B=L.defaultAttributeValues;for(let J in z){let G=z[J];if(G.location>=0){let P=O[J];if(P===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(P=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(P=M.instanceColor)),P!==void 0){let q=P.normalized,A=P.itemSize,F=t.get(P);if(F===void 0)continue;let $=F.buffer,Mt=F.type,at=F.bytesPerElement,H=Mt===i.INT||Mt===i.UNSIGNED_INT||P.gpuType===fl;if(P.isInterleavedBufferAttribute){let Z=P.data,st=Z.stride,ot=P.offset;if(Z.isInstancedInterleavedBuffer){for(let _t=0;_t<G.locationSize;_t++)p(G.location+_t,Z.meshPerAttribute);M.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _t=0;_t<G.locationSize;_t++)g(G.location+_t);i.bindBuffer(i.ARRAY_BUFFER,$);for(let _t=0;_t<G.locationSize;_t++)b(G.location+_t,A/G.locationSize,Mt,q,st*at,(ot+A/G.locationSize*_t)*at,H)}else{if(P.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z,P.meshPerAttribute);M.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let Z=0;Z<G.locationSize;Z++)g(G.location+Z);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Z=0;Z<G.locationSize;Z++)b(G.location+Z,A/G.locationSize,Mt,q,A*at,A/G.locationSize*Z*at,H)}}else if(B!==void 0){let q=B[J];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(G.location,q);break;case 3:i.vertexAttrib3fv(G.location,q);break;case 4:i.vertexAttrib4fv(G.location,q);break;default:i.vertexAttrib1fv(G.location,q)}}}}v()}function C(){N();for(let M in n){let L=n[M];for(let V in L){let E=L[V];for(let O in E)h(E[O].object),delete E[O];delete L[V]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let V in L){let E=L[V];for(let O in E)h(E[O].object),delete E[O];delete L[V]}delete n[M.id]}function U(M){for(let L in n){let V=n[L];if(V[M.id]===void 0)continue;let E=V[M.id];for(let O in E)h(E[O].object),delete E[O];delete V[M.id]}}function N(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function D_(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function L_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==bn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let N=U===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==On&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Qn&&!N)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:C,maxSamples:R}}function U_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new sn,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,b=v*4,x=p.clippingState||null;c.value=x,x=h(m,f,b,d);for(let C=0;C!==b;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,x=d;b!==_;++b,x+=4)o.copy(u[b]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function N_(i){let t=new WeakMap;function e(o,a){return a===hl?o.mapping=fs:a===ul&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hl||a===ul)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Da(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var _r=4,of=[.125,.215,.35,.446,.526,.582],ys=20,Dh=new us,af=new Gt,Lh=null,Uh=0,Nh=0,Fh=!1,xs=(1+Math.sqrt(5))/2,gr=1/xs,lf=[new I(-xs,gr,0),new I(xs,gr,0),new I(-gr,0,xs),new I(gr,0,xs),new I(0,xs,-gr),new I(0,xs,gr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],F_=new I,Jl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=F_}=r;Lh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lh,Uh,Nh),this._renderer.xr.enabled=Fh,t.scissorTest=!1,$l(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:dr,format:bn,colorSpace:ss,depthBuffer:!1},s=cf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O_(r)),this._blurMaterial=B_(r,t,e)}return s}_compileMaterial(t){let e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,Dh)}_sceneToCubeUV(t,e,n,s,r){let c=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(af),u.toneMapping=pi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Pi({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new oe(new Kn,_),p=!1,v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,p=!0):(_.color.copy(af),p=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):x===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let C=this._cubeSize;$l(s,x*C,b>2?C:0,C,C),u.setRenderTarget(s),p&&u.render(g,c),u.render(t,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===fs||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;$l(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Dh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lf[(s-r-1)%lf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new oe(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ys-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):ys;g>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ys}`);let p=[],v=0;for(let U=0;U<ys;++U){let N=U/_,S=Math.exp(-N*N/2);p.push(S),U===0?v+=S:U<g&&(v+=2*S)}for(let U=0;U<p.length;U++)p[U]=p[U]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=m,f.mipInt.value=b-n;let x=this._sizeLods[s],C=3*x*(s>b-_r?s-b+_r:0),R=4*(this._cubeSize-x);$l(e,C,R,3*x,2*x),c.setRenderTarget(e),c.render(u,Dh)}};function O_(i){let t=[],e=[],n=[],s=i,r=i-_r+1+of.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-_r?c=of[o-i+_r-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*d),b=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let R=0;R<d;R++){let U=R%3*2/3-1,N=R>2?0:-1,S=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];v.set(S,_*m*R),b.set(f,g*m*R);let M=[R,R,R,R,R,R];x.set(M,p*m*R)}let C=new Te;C.setAttribute("position",new Qe(v,_)),C.setAttribute("uv",new Qe(b,g)),C.setAttribute("faceIndex",new Qe(x,p)),t.push(C),s>_r&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cf(i,t,e){let n=new Zn(i,t,e);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $l(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function B_(i,t,e){let n=new Float32Array(ys),s=new I(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function hf(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function uf(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function z_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===hl||c===ul,h=c===fs||c===ps;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Jl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Jl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function k_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function V_(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,m=u.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let b=0,x=v.length;b<x;b+=3){let C=v[b+0],R=v[b+1],U=v[b+2];f.push(C,R,R,U,U,C)}}else if(m!==void 0){let v=m.array;_=m.version;for(let b=0,x=v.length/3-1;b<x;b+=3){let C=b+0,R=b+1,U=b+2;f.push(C,R,R,U,U,C)}}else return;let g=new(Eh(f)?Yr:qr)(f,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function H_(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=d[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function G_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function W_(i,t,e){let n=new WeakMap,s=new ce;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;d===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let R=new Float32Array(x*C*4*u),U=new Xr(R,x,C,u);U.type=Qn,U.needsUpdate=!0;let N=b*4;for(let M=0;M<u;M++){let L=g[M],V=p[M],E=v[M],O=x*C*4*M;for(let z=0;z<L.count;z++){let B=z*N;d===!0&&(s.fromBufferAttribute(L,z),R[O+B+0]=s.x,R[O+B+1]=s.y,R[O+B+2]=s.z,R[O+B+3]=0),m===!0&&(s.fromBufferAttribute(V,z),R[O+B+4]=s.x,R[O+B+5]=s.y,R[O+B+6]=s.z,R[O+B+7]=0),_===!0&&(s.fromBufferAttribute(E,z),R[O+B+8]=s.x,R[O+B+9]=s.y,R[O+B+10]=s.z,R[O+B+11]=E.itemSize===4?s.w:1)}}f={count:u,texture:U,size:new ut(x,C)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function X_(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var If=new rn,df=new to(1,1),Pf=new Xr,Df=new Ia,Lf=new Zr,ff=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),_f=new Float32Array(4);function yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Kl(i,t){let e=pf[t];e===void 0&&(e=new Int32Array(t),pf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function q_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function $_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function J_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;_f.set(n),i.uniformMatrix2fv(this.addr,!1,_f),Ue(e,n)}}function K_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;gf.set(n),i.uniformMatrix3fv(this.addr,!1,gf),Ue(e,n)}}function j_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;mf.set(n),i.uniformMatrix4fv(this.addr,!1,mf),Ue(e,n)}}function Q_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(df.compareFunction=Sh,r=df):r=If,e.setTexture2D(t||r,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Df,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lf,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pf,s)}function ux(i){switch(i){case 5126:return q_;case 35664:return Y_;case 35665:return $_;case 35666:return Z_;case 35674:return J_;case 35675:return K_;case 35676:return j_;case 5124:case 35670:return Q_;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(i,t){i.uniform1fv(this.addr,t)}function fx(i,t){let e=yr(t,this.size,2);i.uniform2fv(this.addr,e)}function px(i,t){let e=yr(t,this.size,3);i.uniform3fv(this.addr,e)}function mx(i,t){let e=yr(t,this.size,4);i.uniform4fv(this.addr,e)}function gx(i,t){let e=yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _x(i,t){let e=yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xx(i,t){let e=yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yx(i,t){i.uniform1iv(this.addr,t)}function vx(i,t){i.uniform2iv(this.addr,t)}function bx(i,t){i.uniform3iv(this.addr,t)}function Mx(i,t){i.uniform4iv(this.addr,t)}function Sx(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function Tx(i,t){i.uniform3uiv(this.addr,t)}function Ex(i,t){i.uniform4uiv(this.addr,t)}function Ax(i,t,e){let n=this.cache,s=t.length,r=Kl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||If,r[o])}function Cx(i,t,e){let n=this.cache,s=t.length,r=Kl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Df,r[o])}function Rx(i,t,e){let n=this.cache,s=t.length,r=Kl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lf,r[o])}function Ix(i,t,e){let n=this.cache,s=t.length,r=Kl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pf,r[o])}function Px(i){switch(i){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return xx;case 5124:case 35670:return yx;case 35667:case 35671:return vx;case 35668:case 35672:return bx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return wx;case 36295:return Tx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Ix}}var Bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}},zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Px(e.type)}},kh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function xf(i,t){i.seq.push(t),i.map[t.id]=t}function Dx(i,t,e){let n=i.name,s=n.length;for(Oh.lastIndex=0;;){let r=Oh.exec(n),o=Oh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){xf(e,l===void 0?new Bh(a,i,t):new zh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new kh(a),xf(e,u)),e=u}}}var xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Dx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function yf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lx=37297,Ux=0;function Nx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var vf=new Jt;function Fx(i){ne._getMatrix(vf,ne.workingColorSpace,i);let t=`mat3( ${vf.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Hr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Nx(i.getShaderSource(t),a)}else return r}function Ox(i,t){let e=Fx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bx(i,t){let e;switch(t){case Dd:e="Linear";break;case Ld:e="Reinhard";break;case Ud:e="Cineon";break;case Mo:e="ACESFilmic";break;case Fd:e="AgX";break;case Od:e="Neutral";break;case Nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zl=new I;function zx(){ne.getLuminanceCoefficients(Zl);let i=Zl.x.toFixed(4),t=Zl.y.toFixed(4),e=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function Vx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ro(i){return i!==""}function Mf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(i){return i.replace(Gx,Xx)}var Wx=new Map;function Xx(i,t){let e=te[t];if(e===void 0){let n=Wx.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vh(e)}var qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(i){return i.replace(qx,Yx)}function Yx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $x(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ps:t="ENVMAP_TYPE_CUBE";break;case So:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function Kx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dh:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case Pd:t="ENVMAP_BLENDING_ADD";break}return t}function jx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=$x(e),l=Zx(e),h=Jx(e),u=Kx(e),f=jx(e),d=kx(e),m=Vx(r),_=s.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ro).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(g=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?te.tonemapping_pars_fragment:"",e.toneMapping!==pi?Bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Ox("linearToOutputTexel",e.outputColorSpace),zx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Vh(o),o=Mf(o,e),o=Sf(o,e),a=Vh(a),a=Mf(a,e),a=Sf(a,e),o=wf(o),a=wf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=v+g+o,x=v+p+a,C=yf(s,s.VERTEX_SHADER,b),R=yf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function U(L){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(_)||"",E=s.getShaderInfoLog(C)||"",O=s.getShaderInfoLog(R)||"",z=V.trim(),B=E.trim(),J=O.trim(),G=!0,P=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,R);else{let q=bf(s,C,"vertex"),A=bf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+q+`
`+A)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||J==="")&&(P=!1);P&&(L.diagnostics={runnable:G,programLog:z,vertexShader:{log:B,prefix:g},fragmentShader:{log:J,prefix:p}})}s.deleteShader(C),s.deleteShader(R),N=new xr(s,_),S=Hx(s,_)}let N;this.getUniforms=function(){return N===void 0&&U(this),N};let S;this.getAttributes=function(){return S===void 0&&U(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Lx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ux++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}var ty=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gh(t),e.set(t,n)),n}},Gh=class{constructor(t){this.id=ty++,this.code=t,this.usedTimes=0}};function ey(i,t,e,n,s,r,o){let a=new tr,c=new Hh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,L,V,E){let O=V.fog,z=E.geometry,B=S.isMeshStandardMaterial?V.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),G=J&&J.mapping===So?J.image.height:null,P=m[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,A=q!==void 0?q.length:0,F=0;z.morphAttributes.position!==void 0&&(F=1),z.morphAttributes.normal!==void 0&&(F=2),z.morphAttributes.color!==void 0&&(F=3);let $,Mt,at,H;if(P){let re=ti[P];$=re.vertexShader,Mt=re.fragmentShader}else $=S.vertexShader,Mt=S.fragmentShader,c.update(S),at=c.getVertexShaderID(S),H=c.getFragmentShaderID(S);let Z=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),ot=E.isInstancedMesh===!0,_t=E.isBatchedMesh===!0,zt=!!S.map,Kt=!!S.matcap,D=!!J,ct=!!S.aoMap,tt=!!S.lightMap,nt=!!S.bumpMap,it=!!S.normalMap,xt=!!S.displacementMap,dt=!!S.emissiveMap,bt=!!S.metalnessMap,$t=!!S.roughnessMap,qt=S.anisotropy>0,T=S.clearcoat>0,y=S.dispersion>0,Y=S.iridescence>0,Q=S.sheen>0,ht=S.transmission>0,et=qt&&!!S.anisotropyMap,Ot=T&&!!S.clearcoatMap,vt=T&&!!S.clearcoatNormalMap,Ut=T&&!!S.clearcoatRoughnessMap,Nt=Y&&!!S.iridescenceMap,ft=Y&&!!S.iridescenceThicknessMap,Rt=Q&&!!S.sheenColorMap,Wt=Q&&!!S.sheenRoughnessMap,Bt=!!S.specularMap,At=!!S.specularColorMap,jt=!!S.specularIntensityMap,k=ht&&!!S.transmissionMap,gt=ht&&!!S.thicknessMap,St=!!S.gradientMap,Pt=!!S.alphaMap,pt=S.alphaTest>0,lt=!!S.alphaHash,Ft=!!S.extensions,Zt=pi;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let ge={shaderID:P,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:Mt,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:_t,batchingColor:_t&&E._colorsTexture!==null,instancing:ot,instancingColor:ot&&E.instanceColor!==null,instancingMorph:ot&&E.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ss,alphaToCoverage:!!S.alphaToCoverage,map:zt,matcap:Kt,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:G,aoMap:ct,lightMap:tt,bumpMap:nt,normalMap:it,displacementMap:f&&xt,emissiveMap:dt,normalMapObjectSpace:it&&S.normalMapType===Vd,normalMapTangentSpace:it&&S.normalMapType===Mh,metalnessMap:bt,roughnessMap:$t,anisotropy:qt,anisotropyMap:et,clearcoat:T,clearcoatMap:Ot,clearcoatNormalMap:vt,clearcoatRoughnessMap:Ut,dispersion:y,iridescence:Y,iridescenceMap:Nt,iridescenceThicknessMap:ft,sheen:Q,sheenColorMap:Rt,sheenRoughnessMap:Wt,specularMap:Bt,specularColorMap:At,specularIntensityMap:jt,transmission:ht,transmissionMap:k,thicknessMap:gt,gradientMap:St,opaque:S.transparent===!1&&S.blending===ns&&S.alphaToCoverage===!1,alphaMap:Pt,alphaTest:pt,alphaHash:lt,combine:S.combine,mapUv:zt&&_(S.map.channel),aoMapUv:ct&&_(S.aoMap.channel),lightMapUv:tt&&_(S.lightMap.channel),bumpMapUv:nt&&_(S.bumpMap.channel),normalMapUv:it&&_(S.normalMap.channel),displacementMapUv:xt&&_(S.displacementMap.channel),emissiveMapUv:dt&&_(S.emissiveMap.channel),metalnessMapUv:bt&&_(S.metalnessMap.channel),roughnessMapUv:$t&&_(S.roughnessMap.channel),anisotropyMapUv:et&&_(S.anisotropyMap.channel),clearcoatMapUv:Ot&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:vt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&_(S.sheenRoughnessMap.channel),specularMapUv:Bt&&_(S.specularMap.channel),specularColorMapUv:At&&_(S.specularColorMap.channel),specularIntensityMapUv:jt&&_(S.specularIntensityMap.channel),transmissionMapUv:k&&_(S.transmissionMap.channel),thicknessMapUv:gt&&_(S.thicknessMap.channel),alphaMapUv:Pt&&_(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(it||qt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!z.attributes.uv&&(zt||Pt),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:st,skinning:E.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:F,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:dt&&S.emissiveMap.isVideoTexture===!0&&ne.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pe,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(v(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let M=m[S.type],L;if(M){let V=ti[M];L=jd.clone(V.uniforms)}else L=S.uniforms;return L}function C(S,M){let L;for(let V=0,E=h.length;V<E;V++){let O=h[V];if(O.cacheKey===M){L=O,++L.usedTimes;break}}return L===void 0&&(L=new Qx(i,M,S,r),h.push(L)),L}function R(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function U(S){c.remove(S)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:R,releaseShaderCache:U,programs:h,dispose:N}}function ny(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function iy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ef(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Af(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,f,d,m,_,g){let p=o(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,m,_,g){let p=o(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||iy),n.length>1&&n.sort(f||Ef),s.length>1&&s.sort(f||Ef)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function sy(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Af,i.set(n,[o])):s>=r.length?(o=new Af,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ry(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ay=0;function ly(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cy(i){let t=new ry,e=oy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new _e,o=new _e;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,v=0,b=0,x=0,C=0,R=0,U=0;l.sort(ly);for(let S=0,M=l.length;S<M;S++){let L=l[S],V=L.color,E=L.intensity,O=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*E,u+=V.g*E,f+=V.b*E;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],E);U++}else if(L.isDirectionalLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,G=e.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=L.shadow.matrix,v++}n.directional[d]=B,d++}else if(L.isSpotLight){let B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(V).multiplyScalar(E),B.distance=O,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[_]=B;let J=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,J.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=J.matrix,L.castShadow){let G=e.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=z,x++}_++}else if(L.isRectAreaLight){let B=t.get(L);B.color.copy(V).multiplyScalar(E),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=B,g++}else if(L.isPointLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){let J=L.shadow,G=e.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=L.shadow.matrix,b++}n.point[m]=B,m++}else if(L.isHemisphereLight){let B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(E),B.groundColor.copy(L.groundColor).multiplyScalar(E),n.hemi[p]=B,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==d||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==v||N.numPointShadows!==b||N.numSpotShadows!==x||N.numSpotMaps!==C||N.numLightProbes!==U)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=U,N.directionalLength=d,N.pointLength=m,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=v,N.numPointShadows=b,N.numSpotShadows=x,N.numSpotMaps=C,N.numLightProbes=U,n.version=ay++)}function c(l,h){let u=0,f=0,d=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let b=l[p];if(b.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(b.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(b.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Cf(i){let t=new cy(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function hy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Cf(i),t.set(s,[a])):r>=o.length?(a=new Cf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fy(i,t,e){let n=new sr,s=new ut,r=new ut,o=new ce,a=new Ga({depthPacking:kd}),c=new Wa,l={},h=e.maxTextureSize,u={[di]:tn,[tn]:di,[Pe]:Pe},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:uy,fragmentShader:dy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Te;m.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new oe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let p=this.type;this.render=function(R,U,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(fi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let E=p!==jn&&this.type===jn,O=p===jn&&this.type!==jn;for(let z=0,B=R.length;z<B;z++){let J=R[z],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let P=G.getFrameExtents();if(s.multiply(P),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/P.x),s.x=r.x*P.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/P.y),s.y=r.y*P.y,G.mapSize.y=r.y)),G.map===null||E===!0||O===!0){let A=this.type!==jn?{minFilter:yn,magFilter:yn}:{};G.map!==null&&G.map.dispose(),G.map=new Zn(s.x,s.y,A),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let q=G.getViewportCount();for(let A=0;A<q;A++){let F=G.getViewport(A);o.set(r.x*F.x,r.y*F.y,r.x*F.z,r.y*F.w),V.viewport(o),G.updateMatrices(J,A),n=G.getFrustum(),x(U,N,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===jn&&v(G,N),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,M,L)};function v(R,U){let N=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(U,null,N,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(U,null,N,d,_,null)}function b(R,U,N,S){let M=null,L=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=N.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let V=M.uuid,E=U.uuid,O=l[V];O===void 0&&(O={},l[V]=O);let z=O[E];z===void 0&&(z=M.clone(),O[E]=z,U.addEventListener("dispose",C)),M=z}if(M.visible=U.visible,M.wireframe=U.wireframe,S===jn?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:u[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=i.properties.get(M);V.light=N}return M}function x(R,U,N,S,M){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===jn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let E=t.update(R),O=R.material;if(Array.isArray(O)){let z=E.groups;for(let B=0,J=z.length;B<J;B++){let G=z[B],P=O[G.materialIndex];if(P&&P.visible){let q=b(R,P,S,M);R.onBeforeShadow(i,R,U,N,E,q,G),i.renderBufferDirect(N,null,E,q,R,G),R.onAfterShadow(i,R,U,N,E,q,G)}}}else if(O.visible){let z=b(R,O,S,M);R.onBeforeShadow(i,R,U,N,E,z,null),i.renderBufferDirect(N,null,E,z,R,null),R.onAfterShadow(i,R,U,N,E,z,null)}}let V=R.children;for(let E=0,O=V.length;E<O;E++)x(V[E],U,N,S,M)}function C(R){R.target.removeEventListener("dispose",C);for(let N in l){let S=l[N],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var py={[il]:sl,[rl]:ll,[ol]:cl,[is]:al,[sl]:il,[ll]:rl,[cl]:ol,[al]:is};function my(i,t){function e(){let k=!1,gt=new ce,St=null,Pt=new ce(0,0,0,0);return{setMask:function(pt){St!==pt&&!k&&(i.colorMask(pt,pt,pt,pt),St=pt)},setLocked:function(pt){k=pt},setClear:function(pt,lt,Ft,Zt,ge){ge===!0&&(pt*=Zt,lt*=Zt,Ft*=Zt),gt.set(pt,lt,Ft,Zt),Pt.equals(gt)===!1&&(i.clearColor(pt,lt,Ft,Zt),Pt.copy(gt))},reset:function(){k=!1,St=null,Pt.set(-1,0,0,0)}}}function n(){let k=!1,gt=!1,St=null,Pt=null,pt=null;return{setReversed:function(lt){if(gt!==lt){let Ft=t.get("EXT_clip_control");lt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),gt=lt;let Zt=pt;pt=null,this.setClear(Zt)}},getReversed:function(){return gt},setTest:function(lt){lt?Z(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(lt){St!==lt&&!k&&(i.depthMask(lt),St=lt)},setFunc:function(lt){if(gt&&(lt=py[lt]),Pt!==lt){switch(lt){case il:i.depthFunc(i.NEVER);break;case sl:i.depthFunc(i.ALWAYS);break;case rl:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case ll:i.depthFunc(i.GREATER);break;case cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=lt}},setLocked:function(lt){k=lt},setClear:function(lt){pt!==lt&&(gt&&(lt=1-lt),i.clearDepth(lt),pt=lt)},reset:function(){k=!1,St=null,Pt=null,pt=null,gt=!1}}}function s(){let k=!1,gt=null,St=null,Pt=null,pt=null,lt=null,Ft=null,Zt=null,ge=null;return{setTest:function(re){k||(re?Z(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(re){gt!==re&&!k&&(i.stencilMask(re),gt=re)},setFunc:function(re,si,qn){(St!==re||Pt!==si||pt!==qn)&&(i.stencilFunc(re,si,qn),St=re,Pt=si,pt=qn)},setOp:function(re,si,qn){(lt!==re||Ft!==si||Zt!==qn)&&(i.stencilOp(re,si,qn),lt=re,Ft=si,Zt=qn)},setLocked:function(re){k=re},setClear:function(re){ge!==re&&(i.clearStencil(re),ge=re)},reset:function(){k=!1,gt=null,St=null,Pt=null,pt=null,lt=null,Ft=null,Zt=null,ge=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,v=null,b=null,x=null,C=null,R=null,U=new Gt(0,0,0),N=0,S=!1,M=null,L=null,V=null,E=null,O=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,J=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=J>=2);let P=null,q={},A=i.getParameter(i.SCISSOR_BOX),F=i.getParameter(i.VIEWPORT),$=new ce().fromArray(A),Mt=new ce().fromArray(F);function at(k,gt,St,Pt){let pt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(k,lt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<St;Ft++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(gt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return lt}let H={};H[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(is),nt(!1),it(ah),Z(i.CULL_FACE),ct(fi);function Z(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function st(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function ot(k,gt){return u[k]!==gt?(i.bindFramebuffer(k,gt),u[k]=gt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function _t(k,gt){let St=d,Pt=!1;if(k){St=f.get(gt),St===void 0&&(St=[],f.set(gt,St));let pt=k.textures;if(St.length!==pt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ft=pt.length;lt<Ft;lt++)St[lt]=i.COLOR_ATTACHMENT0+lt;St.length=pt.length,Pt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(St)}function zt(k){return m!==k?(i.useProgram(k),m=k,!0):!1}let Kt={[Ri]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[pd]:i.FUNC_REVERSE_SUBTRACT};Kt[md]=i.MIN,Kt[gd]=i.MAX;let D={[_d]:i.ZERO,[xd]:i.ONE,[yd]:i.SRC_COLOR,[Sa]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[bd]:i.DST_ALPHA,[vd]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[Md]:i.ONE_MINUS_DST_ALPHA,[Ed]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(k,gt,St,Pt,pt,lt,Ft,Zt,ge,re){if(k===fi){_===!0&&(st(i.BLEND),_=!1);return}if(_===!1&&(Z(i.BLEND),_=!0),k!==dd){if(k!==g||re!==S){if((p!==Ri||x!==Ri)&&(i.blendEquation(i.FUNC_ADD),p=Ri,x=Ri),re)switch(k){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,b=null,C=null,R=null,U.set(0,0,0),N=0,g=k,S=re}return}pt=pt||gt,lt=lt||St,Ft=Ft||Pt,(gt!==p||pt!==x)&&(i.blendEquationSeparate(Kt[gt],Kt[pt]),p=gt,x=pt),(St!==v||Pt!==b||lt!==C||Ft!==R)&&(i.blendFuncSeparate(D[St],D[Pt],D[lt],D[Ft]),v=St,b=Pt,C=lt,R=Ft),(Zt.equals(U)===!1||ge!==N)&&(i.blendColor(Zt.r,Zt.g,Zt.b,ge),U.copy(Zt),N=ge),g=k,S=!1}function tt(k,gt){k.side===Pe?st(i.CULL_FACE):Z(i.CULL_FACE);let St=k.side===tn;gt&&(St=!St),nt(St),k.blending===ns&&k.transparent===!1?ct(fi):ct(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Pt=k.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),dt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function it(k){k!==hd?(Z(i.CULL_FACE),k!==L&&(k===ah?i.cullFace(i.BACK):k===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),L=k}function xt(k){k!==V&&(B&&i.lineWidth(k),V=k)}function dt(k,gt,St){k?(Z(i.POLYGON_OFFSET_FILL),(E!==gt||O!==St)&&(i.polygonOffset(gt,St),E=gt,O=St)):st(i.POLYGON_OFFSET_FILL)}function bt(k){k?Z(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function $t(k){k===void 0&&(k=i.TEXTURE0+z-1),P!==k&&(i.activeTexture(k),P=k)}function qt(k,gt,St){St===void 0&&(P===null?St=i.TEXTURE0+z-1:St=P);let Pt=q[St];Pt===void 0&&(Pt={type:void 0,texture:void 0},q[St]=Pt),(Pt.type!==k||Pt.texture!==gt)&&(P!==St&&(i.activeTexture(St),P=St),i.bindTexture(k,gt||H[k]),Pt.type=k,Pt.texture=gt)}function T(){let k=q[P];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(k){$.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),$.copy(k))}function Wt(k){Mt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Mt.copy(k))}function Bt(k,gt){let St=l.get(gt);St===void 0&&(St=new WeakMap,l.set(gt,St));let Pt=St.get(k);Pt===void 0&&(Pt=i.getUniformBlockIndex(gt,k.name),St.set(k,Pt))}function At(k,gt){let Pt=l.get(gt).get(k);c.get(gt)!==Pt&&(i.uniformBlockBinding(gt,Pt,k.__bindingPointIndex),c.set(gt,Pt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},P=null,q={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,v=null,b=null,x=null,C=null,R=null,U=new Gt(0,0,0),N=0,S=!1,M=null,L=null,V=null,E=null,O=null,$.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:st,bindFramebuffer:ot,drawBuffers:_t,useProgram:zt,setBlending:ct,setMaterial:tt,setFlipSided:nt,setCullFace:it,setLineWidth:xt,setPolygonOffset:dt,setScissorTest:bt,activeTexture:$t,bindTexture:qt,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:Y,texImage2D:Nt,texImage3D:ft,updateUBOMapping:Bt,uniformBlockBinding:At,texStorage2D:vt,texStorage3D:Ut,texSubImage2D:Q,texSubImage3D:ht,compressedTexSubImage2D:et,compressedTexSubImage3D:Ot,scissor:Rt,viewport:Wt,reset:jt}}function gy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return d?new OffscreenCanvas(T,y):Wr("canvas")}function _(T,y,Y){let Q=1,ht=qt(T);if((ht.width>Y||ht.height>Y)&&(Q=Y/Math.max(ht.width,ht.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let et=Math.floor(Q*ht.width),Ot=Math.floor(Q*ht.height);u===void 0&&(u=m(et,Ot));let vt=y?m(et,Ot):u;return vt.width=et,vt.height=Ot,vt.getContext("2d").drawImage(T,0,0,et,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+et+"x"+Ot+")."),vt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,y,Y,Q,ht=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=y;if(y===i.RED&&(Y===i.FLOAT&&(et=i.R32F),Y===i.HALF_FLOAT&&(et=i.R16F),Y===i.UNSIGNED_BYTE&&(et=i.R8)),y===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(et=i.R8UI),Y===i.UNSIGNED_SHORT&&(et=i.R16UI),Y===i.UNSIGNED_INT&&(et=i.R32UI),Y===i.BYTE&&(et=i.R8I),Y===i.SHORT&&(et=i.R16I),Y===i.INT&&(et=i.R32I)),y===i.RG&&(Y===i.FLOAT&&(et=i.RG32F),Y===i.HALF_FLOAT&&(et=i.RG16F),Y===i.UNSIGNED_BYTE&&(et=i.RG8)),y===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(et=i.RG8UI),Y===i.UNSIGNED_SHORT&&(et=i.RG16UI),Y===i.UNSIGNED_INT&&(et=i.RG32UI),Y===i.BYTE&&(et=i.RG8I),Y===i.SHORT&&(et=i.RG16I),Y===i.INT&&(et=i.RG32I)),y===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(et=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(et=i.RGB16UI),Y===i.UNSIGNED_INT&&(et=i.RGB32UI),Y===i.BYTE&&(et=i.RGB8I),Y===i.SHORT&&(et=i.RGB16I),Y===i.INT&&(et=i.RGB32I)),y===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),Y===i.UNSIGNED_INT&&(et=i.RGBA32UI),Y===i.BYTE&&(et=i.RGBA8I),Y===i.SHORT&&(et=i.RGBA16I),Y===i.INT&&(et=i.RGBA32I)),y===i.RGB&&(Y===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),y===i.RGBA){let Ot=ht?Hr:ne.getTransfer(Q);Y===i.FLOAT&&(et=i.RGBA32F),Y===i.HALF_FLOAT&&(et=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(et=Ot===he?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(T,y){let Y;return T?y===null||y===zi||y===fr?Y=i.DEPTH24_STENCIL8:y===Qn?Y=i.DEPTH32F_STENCIL8:y===ur&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zi||y===fr?Y=i.DEPTH_COMPONENT24:y===Qn?Y=i.DEPTH_COMPONENT32F:y===ur&&(Y=i.DEPTH_COMPONENT16),Y}function C(T,y){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==yn&&T.minFilter!==Dn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){let y=T.target;y.removeEventListener("dispose",R),N(y),y.isVideoTexture&&h.delete(y)}function U(T){let y=T.target;y.removeEventListener("dispose",U),M(y)}function N(T){let y=n.get(T);if(y.__webglInit===void 0)return;let Y=T.source,Q=f.get(Y);if(Q){let ht=Q[y.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&S(T),Object.keys(Q).length===0&&f.delete(Y)}n.remove(T)}function S(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let Y=T.source,Q=f.get(Y);delete Q[y.__cacheKey],o.memory.textures--}function M(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let ht=0;ht<y.__webglFramebuffer[Q].length;ht++)i.deleteFramebuffer(y.__webglFramebuffer[Q][ht]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=T.textures;for(let Q=0,ht=Y.length;Q<ht;Q++){let et=n.get(Y[Q]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(Y[Q])}n.remove(T)}let L=0;function V(){L=0}function E(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function O(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function z(T,y){let Y=n.get(T);if(T.isVideoTexture&&bt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&Y.__version!==T.version){let Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(Y,T,y);return}}else T.isExternalTexture&&(Y.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+y)}function B(T,y){let Y=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&Y.__version!==T.version){H(Y,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+y)}function J(T,y){let Y=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&Y.__version!==T.version){H(Y,T,y);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+y)}function G(T,y){let Y=n.get(T);if(T.version>0&&Y.__version!==T.version){Z(Y,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+y)}let P={[Zs]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},q={[yn]:i.NEAREST,[Bd]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},A={[Hd]:i.NEVER,[$d]:i.ALWAYS,[Gd]:i.LESS,[Sh]:i.LEQUAL,[Wd]:i.EQUAL,[Yd]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function F(T,y){if(y.type===Qn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Dn||y.magFilter===dl||y.magFilter===wo||y.magFilter===Bi||y.minFilter===Dn||y.minFilter===dl||y.minFilter===wo||y.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,P[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,P[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,P[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,q[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,q[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,A[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===yn||y.minFilter!==wo&&y.minFilter!==Bi||y.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $(T,y){let Y=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R));let Q=y.source,ht=f.get(Q);ht===void 0&&(ht={},f.set(Q,ht));let et=O(y);if(et!==T.__cacheKey){ht[et]===void 0&&(ht[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ht[et].usedTimes++;let Ot=ht[T.__cacheKey];Ot!==void 0&&(ht[T.__cacheKey].usedTimes--,Ot.usedTimes===0&&S(y)),T.__cacheKey=et,T.__webglTexture=ht[et].texture}return Y}function Mt(T,y,Y){return Math.floor(Math.floor(T/Y)/y)}function at(T,y,Y,Q){let et=T.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,Y,Q,y.data);else{et.sort((ft,Rt)=>ft.start-Rt.start);let Ot=0;for(let ft=1;ft<et.length;ft++){let Rt=et[Ot],Wt=et[ft],Bt=Rt.start+Rt.count,At=Mt(Wt.start,y.width,4),jt=Mt(Rt.start,y.width,4);Wt.start<=Bt+1&&At===jt&&Mt(Wt.start+Wt.count-1,y.width,4)===At?Rt.count=Math.max(Rt.count,Wt.start+Wt.count-Rt.start):(++Ot,et[Ot]=Wt)}et.length=Ot+1;let vt=i.getParameter(i.UNPACK_ROW_LENGTH),Ut=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ft=0,Rt=et.length;ft<Rt;ft++){let Wt=et[ft],Bt=Math.floor(Wt.start/4),At=Math.ceil(Wt.count/4),jt=Bt%y.width,k=Math.floor(Bt/y.width),gt=At,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,jt,k,gt,St,Y,Q,y.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,vt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function H(T,y,Y){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);let ht=$(T,y),et=y.source;e.bindTexture(Q,T.__webglTexture,i.TEXTURE0+Y);let Ot=n.get(et);if(et.version!==Ot.__version||ht===!0){e.activeTexture(i.TEXTURE0+Y);let vt=ne.getPrimaries(ne.workingColorSpace),Ut=y.colorSpace===mi?null:ne.getPrimaries(y.colorSpace),Nt=y.colorSpace===mi||vt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let ft=_(y.image,!1,s.maxTextureSize);ft=$t(y,ft);let Rt=r.convert(y.format,y.colorSpace),Wt=r.convert(y.type),Bt=b(y.internalFormat,Rt,Wt,y.colorSpace,y.isVideoTexture);F(Q,y);let At,jt=y.mipmaps,k=y.isVideoTexture!==!0,gt=Ot.__version===void 0||ht===!0,St=et.dataReady,Pt=C(y,ft);if(y.isDepthTexture)Bt=x(y.format===pr,y.type),gt&&(k?e.texStorage2D(i.TEXTURE_2D,1,Bt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ft.width,ft.height,0,Rt,Wt,null));else if(y.isDataTexture)if(jt.length>0){k&&gt&&e.texStorage2D(i.TEXTURE_2D,Pt,Bt,jt[0].width,jt[0].height);for(let pt=0,lt=jt.length;pt<lt;pt++)At=jt[pt],k?St&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,At.width,At.height,Rt,Wt,At.data):e.texImage2D(i.TEXTURE_2D,pt,Bt,At.width,At.height,0,Rt,Wt,At.data);y.generateMipmaps=!1}else k?(gt&&e.texStorage2D(i.TEXTURE_2D,Pt,Bt,ft.width,ft.height),St&&at(y,ft,Rt,Wt)):e.texImage2D(i.TEXTURE_2D,0,Bt,ft.width,ft.height,0,Rt,Wt,ft.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Bt,jt[0].width,jt[0].height,ft.depth);for(let pt=0,lt=jt.length;pt<lt;pt++)if(At=jt[pt],y.format!==bn)if(Rt!==null)if(k){if(St)if(y.layerUpdates.size>0){let Ft=Ph(At.width,At.height,y.format,y.type);for(let Zt of y.layerUpdates){let ge=At.data.subarray(Zt*Ft/At.data.BYTES_PER_ELEMENT,(Zt+1)*Ft/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Zt,At.width,At.height,1,Rt,ge)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,At.width,At.height,ft.depth,Rt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Bt,At.width,At.height,ft.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,At.width,At.height,ft.depth,Rt,Wt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Bt,At.width,At.height,ft.depth,0,Rt,Wt,At.data)}else{k&&gt&&e.texStorage2D(i.TEXTURE_2D,Pt,Bt,jt[0].width,jt[0].height);for(let pt=0,lt=jt.length;pt<lt;pt++)At=jt[pt],y.format!==bn?Rt!==null?k?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,At.width,At.height,Rt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Bt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?St&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,At.width,At.height,Rt,Wt,At.data):e.texImage2D(i.TEXTURE_2D,pt,Bt,At.width,At.height,0,Rt,Wt,At.data)}else if(y.isDataArrayTexture)if(k){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Bt,ft.width,ft.height,ft.depth),St)if(y.layerUpdates.size>0){let pt=Ph(ft.width,ft.height,y.format,y.type);for(let lt of y.layerUpdates){let Ft=ft.data.subarray(lt*pt/ft.data.BYTES_PER_ELEMENT,(lt+1)*pt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ft.width,ft.height,1,Rt,Wt,Ft)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Rt,Wt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ft.width,ft.height,ft.depth,0,Rt,Wt,ft.data);else if(y.isData3DTexture)k?(gt&&e.texStorage3D(i.TEXTURE_3D,Pt,Bt,ft.width,ft.height,ft.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Rt,Wt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ft.width,ft.height,ft.depth,0,Rt,Wt,ft.data);else if(y.isFramebufferTexture){if(gt)if(k)e.texStorage2D(i.TEXTURE_2D,Pt,Bt,ft.width,ft.height);else{let pt=ft.width,lt=ft.height;for(let Ft=0;Ft<Pt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Bt,pt,lt,0,Rt,Wt,null),pt>>=1,lt>>=1}}else if(jt.length>0){if(k&&gt){let pt=qt(jt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Bt,pt.width,pt.height)}for(let pt=0,lt=jt.length;pt<lt;pt++)At=jt[pt],k?St&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Rt,Wt,At):e.texImage2D(i.TEXTURE_2D,pt,Bt,Rt,Wt,At);y.generateMipmaps=!1}else if(k){if(gt){let pt=qt(ft);e.texStorage2D(i.TEXTURE_2D,Pt,Bt,pt.width,pt.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Wt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Rt,Wt,ft);g(y)&&p(Q),Ot.__version=et.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Z(T,y,Y){if(y.image.length!==6)return;let Q=$(T,y),ht=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+Y);let et=n.get(ht);if(ht.version!==et.__version||Q===!0){e.activeTexture(i.TEXTURE0+Y);let Ot=ne.getPrimaries(ne.workingColorSpace),vt=y.colorSpace===mi?null:ne.getPrimaries(y.colorSpace),Ut=y.colorSpace===mi||Ot===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let Nt=y.isCompressedTexture||y.image[0].isCompressedTexture,ft=y.image[0]&&y.image[0].isDataTexture,Rt=[];for(let lt=0;lt<6;lt++)!Nt&&!ft?Rt[lt]=_(y.image[lt],!0,s.maxCubemapSize):Rt[lt]=ft?y.image[lt].image:y.image[lt],Rt[lt]=$t(y,Rt[lt]);let Wt=Rt[0],Bt=r.convert(y.format,y.colorSpace),At=r.convert(y.type),jt=b(y.internalFormat,Bt,At,y.colorSpace),k=y.isVideoTexture!==!0,gt=et.__version===void 0||Q===!0,St=ht.dataReady,Pt=C(y,Wt);F(i.TEXTURE_CUBE_MAP,y);let pt;if(Nt){k&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,jt,Wt.width,Wt.height);for(let lt=0;lt<6;lt++){pt=Rt[lt].mipmaps;for(let Ft=0;Ft<pt.length;Ft++){let Zt=pt[Ft];y.format!==bn?Bt!==null?k?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,0,0,Zt.width,Zt.height,Bt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,jt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,0,0,Zt.width,Zt.height,Bt,At,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,jt,Zt.width,Zt.height,0,Bt,At,Zt.data)}}}else{if(pt=y.mipmaps,k&&gt){pt.length>0&&Pt++;let lt=qt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,jt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ft){k?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Rt[lt].width,Rt[lt].height,Bt,At,Rt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,jt,Rt[lt].width,Rt[lt].height,0,Bt,At,Rt[lt].data);for(let Ft=0;Ft<pt.length;Ft++){let ge=pt[Ft].image[lt].image;k?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,0,0,ge.width,ge.height,Bt,At,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,jt,ge.width,ge.height,0,Bt,At,ge.data)}}else{k?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt,At,Rt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,jt,Bt,At,Rt[lt]);for(let Ft=0;Ft<pt.length;Ft++){let Zt=pt[Ft];k?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,0,0,Bt,At,Zt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,jt,Bt,At,Zt.image[lt])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),et.__version=ht.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function st(T,y,Y,Q,ht,et){let Ot=r.convert(Y.format,Y.colorSpace),vt=r.convert(Y.type),Ut=b(Y.internalFormat,Ot,vt,Y.colorSpace),Nt=n.get(y),ft=n.get(Y);if(ft.__renderTarget=y,!Nt.__hasExternalTextures){let Rt=Math.max(1,y.width>>et),Wt=Math.max(1,y.height>>et);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,et,Ut,Rt,Wt,y.depth,0,Ot,vt,null):e.texImage2D(ht,et,Ut,Rt,Wt,0,Ot,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),dt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ht,ft.__webglTexture,0,xt(y)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ht,ft.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(T,y,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let Q=y.depthTexture,ht=Q&&Q.isDepthTexture?Q.type:null,et=x(y.stencilBuffer,ht),Ot=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=xt(y);dt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,et,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,T)}else{let Q=y.textures;for(let ht=0;ht<Q.length;ht++){let et=Q[ht],Ot=r.convert(et.format,et.colorSpace),vt=r.convert(et.type),Ut=b(et.internalFormat,Ot,vt,et.colorSpace),Nt=xt(y);Y&&dt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Ut,y.width,y.height):dt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,Ut,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);let ht=Q.__webglTexture,et=xt(y);if(y.depthTexture.format===Js)dt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(y.depthTexture.format===pr)dt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function zt(T){let y=n.get(T),Y=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let Q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let ht=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",ht)};Q.addEventListener("dispose",ht),y.__depthDisposeCallback=ht}y.__boundDepthTexture=Q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let Q=T.texture.mipmaps;Q&&Q.length>0?_t(y.__webglFramebuffer[0],T):_t(y.__webglFramebuffer,T)}else if(Y){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),ot(y.__webglDepthbuffer[Q],T,!1);else{let ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,et)}}else{let Q=T.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ot(y.__webglDepthbuffer,T,!1);else{let ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(T,y,Y){let Q=n.get(T);y!==void 0&&st(Q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&zt(T)}function D(T){let y=T.texture,Y=n.get(T),Q=n.get(y);T.addEventListener("dispose",U);let ht=T.textures,et=T.isWebGLCubeRenderTarget===!0,Ot=ht.length>1;if(Ot||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++),et){Y.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[vt]=[];for(let Ut=0;Ut<y.mipmaps.length;Ut++)Y.__webglFramebuffer[vt][Ut]=i.createFramebuffer()}else Y.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let vt=0;vt<y.mipmaps.length;vt++)Y.__webglFramebuffer[vt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let vt=0,Ut=ht.length;vt<Ut;vt++){let Nt=n.get(ht[vt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&dt(T)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let vt=0;vt<ht.length;vt++){let Ut=ht[vt];Y.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[vt]);let Nt=r.convert(Ut.format,Ut.colorSpace),ft=r.convert(Ut.type),Rt=b(Ut.internalFormat,Nt,ft,Ut.colorSpace,T.isXRRenderTarget===!0),Wt=xt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Rt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(Y.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),F(i.TEXTURE_CUBE_MAP,y);for(let vt=0;vt<6;vt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ut=0;Ut<y.mipmaps.length;Ut++)st(Y.__webglFramebuffer[vt][Ut],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut);else st(Y.__webglFramebuffer[vt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let vt=0,Ut=ht.length;vt<Ut;vt++){let Nt=ht[vt],ft=n.get(Nt),Rt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Rt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Rt,ft.__webglTexture),F(Rt,Nt),st(Y.__webglFramebuffer,T,Nt,i.COLOR_ATTACHMENT0+vt,Rt,0),g(Nt)&&p(Rt)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(vt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Q.__webglTexture),F(vt,y),y.mipmaps&&y.mipmaps.length>0)for(let Ut=0;Ut<y.mipmaps.length;Ut++)st(Y.__webglFramebuffer[Ut],T,y,i.COLOR_ATTACHMENT0,vt,Ut);else st(Y.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,vt,0);g(y)&&p(vt),e.unbindTexture()}T.depthBuffer&&zt(T)}function ct(T){let y=T.textures;for(let Y=0,Q=y.length;Y<Q;Y++){let ht=y[Y];if(g(ht)){let et=v(T),Ot=n.get(ht).__webglTexture;e.bindTexture(et,Ot),p(et),e.unbindTexture()}}}let tt=[],nt=[];function it(T){if(T.samples>0){if(dt(T)===!1){let y=T.textures,Y=T.width,Q=T.height,ht=i.COLOR_BUFFER_BIT,et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(T),vt=y.length>1;if(vt)for(let Nt=0;Nt<y.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);let Ut=T.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Nt=0;Nt<y.length;Nt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Nt]);let ft=n.get(y[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,ht,i.NEAREST),c===!0&&(tt.length=0,nt.length=0,tt.push(i.COLOR_ATTACHMENT0+Nt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(tt.push(et),nt.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Nt=0;Nt<y.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Nt]);let ft=n.get(y[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function xt(T){return Math.min(s.maxSamples,T.samples)}function dt(T){let y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function bt(T){let y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function $t(T,y){let Y=T.colorSpace,Q=T.format,ht=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||Y!==ss&&Y!==mi&&(ne.getTransfer(Y)===he?(Q!==bn||ht!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),y}function qt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=E,this.resetTextureUnits=V,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Kt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=dt}function _y(i,t){function e(n,s=mi){let r,o=ne.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===fl)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===yh)return i.RGB;if(n===bn)return i.RGBA;if(n===Js)return i.DEPTH_COMPONENT;if(n===pr)return i.DEPTH_STENCIL;if(n===vh)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===bh)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===To||n===Eo||n===Ao||n===Co)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===vl||n===bl||n===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===wl||n===Tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===wl)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===El||n===Al||n===Cl||n===Rl||n===Il||n===Pl||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Il)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kl||n===Vl||n===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===kl)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Wl||n===Xl||n===ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new eo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Nn({vertexShader:xy,fragmentShader:yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends $n{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,_=typeof XRWebGLBinding<"u",g=new Wh,p={},v=e.getContextAttributes(),b=null,x=null,C=[],R=[],U=new ut,N=null,S=new Ve;S.viewport=new ce;let M=new Ve;M.viewport=new ce;let L=[S,M],V=new el,E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=C[H];return Z===void 0&&(Z=new er,C[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=C[H];return Z===void 0&&(Z=new er,C[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=C[H];return Z===void 0&&(Z=new er,C[H]=Z),Z.getHandSpace()};function z(H){let Z=R.indexOf(H.inputSource);if(Z===-1)return;let st=C[Z];st!==void 0&&(st.update(H.inputSource,H.frame,l||o),st.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",J);for(let H=0;H<C.length;H++){let Z=R[H];Z!==null&&(R[H]=null,C[H].disconnect(Z))}E=null,O=null,g.reset();for(let H in p)delete p[H];t.setRenderTarget(b),d=null,f=null,u=null,s=null,x=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",B),s.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(U),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,ot=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=v.stencil?pr:Js,ot=v.stencil?fr:zi);let zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Zn(f.textureWidth,f.textureHeight,{format:bn,type:On,depthTexture:new to(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let st={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Zn(d.framebufferWidth,d.framebufferHeight,{format:bn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(H){for(let Z=0;Z<H.removed.length;Z++){let st=H.removed[Z],ot=R.indexOf(st);ot>=0&&(R[ot]=null,C[ot].disconnect(st))}for(let Z=0;Z<H.added.length;Z++){let st=H.added[Z],ot=R.indexOf(st);if(ot===-1){for(let zt=0;zt<C.length;zt++)if(zt>=R.length){R.push(st),ot=zt;break}else if(R[zt]===null){R[zt]=st,ot=zt;break}if(ot===-1)break}let _t=C[ot];_t&&_t.connect(st)}}let G=new I,P=new I;function q(H,Z,st){G.setFromMatrixPosition(Z.matrixWorld),P.setFromMatrixPosition(st.matrixWorld);let ot=G.distanceTo(P),_t=Z.projectionMatrix.elements,zt=st.projectionMatrix.elements,Kt=_t[14]/(_t[10]-1),D=_t[14]/(_t[10]+1),ct=(_t[9]+1)/_t[5],tt=(_t[9]-1)/_t[5],nt=(_t[8]-1)/_t[0],it=(zt[8]+1)/zt[0],xt=Kt*nt,dt=Kt*it,bt=ot/(-nt+it),$t=bt*-nt;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX($t),H.translateZ(bt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),_t[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let qt=Kt+bt,T=D+bt,y=xt-$t,Y=dt+(ot-$t),Q=ct*D/T*qt,ht=tt*D/T*qt;H.projectionMatrix.makePerspective(y,Y,Q,ht,qt,T),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function A(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,st=H.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(st=g.depthFar)),V.near=M.near=S.near=Z,V.far=M.far=S.far=st,(E!==V.near||O!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),E=V.near,O=V.far),V.layers.mask=H.layers.mask|6,S.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;let ot=H.parent,_t=V.cameras;A(V,ot);for(let zt=0;zt<_t.length;zt++)A(_t[zt],ot);_t.length===2?q(V,S,M):V.projectionMatrix.copy(S.projectionMatrix),F(H,V,ot)};function F(H,Z,st){st===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(st.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ks*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(H){return p[H]};let $=null;function Mt(H,Z){if(h=Z.getViewerPose(l||o),m=Z,h!==null){let st=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ot=!1;st.length!==V.cameras.length&&(V.cameras.length=0,ot=!0);for(let D=0;D<st.length;D++){let ct=st[D],tt=null;if(d!==null)tt=d.getViewport(ct);else{let it=u.getViewSubImage(f,ct);tt=it.viewport,D===0&&(t.setRenderTargetTextures(x,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(x))}let nt=L[D];nt===void 0&&(nt=new Ve,nt.layers.enable(D),nt.viewport=new ce,L[D]=nt),nt.matrix.fromArray(ct.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ct.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(tt.x,tt.y,tt.width,tt.height),D===0&&(V.matrix.copy(nt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ot===!0&&V.cameras.push(nt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let D=u.getDepthInformation(st[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<st.length;D++){let ct=st[D].camera;if(ct){let tt=p[ct];tt||(tt=new eo,p[ct]=tt);let nt=u.getCameraImage(ct);tt.sourceTexture=nt}}}}for(let st=0;st<C.length;st++){let ot=R[st],_t=C[st];ot!==null&&_t!==void 0&&_t.update(ot,Z,l||o)}$&&$(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}let at=new Rf;at.setAnimationLoop(Mt),this.setAnimationLoop=function(H){$=H},this.dispose=function(){}}},_s=new Un,vy=new _e;function by(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ah(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),b=v.envMap,x=v.envMapRotation;b&&(g.envMap.value=b,_s.copy(x),_s.x*=-1,_s.y*=-1,_s.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),g.envMapRotation.value.setFromMatrix4(vy.makeRotationFromEuler(_s)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function My(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let x=b.program;n.uniformBlockBinding(v,x)}function l(v,b){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));let C=b.program;n.updateUBOMapping(v,C);let R=t.render.frame;r[v.id]!==R&&(f(v),r[v.id]=R)}function h(v){let b=u();v.__bindingPointIndex=b;let x=i.createBuffer(),C=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let b=s[v.id],x=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,U=x.length;R<U;R++){let N=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,M=N.length;S<M;S++){let L=N[S];if(d(L,R,S,C)===!0){let V=L.__offset,E=Array.isArray(L.value)?L.value:[L.value],O=0;for(let z=0;z<E.length;z++){let B=E[z],J=_(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,V+O,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,b,x,C){let R=v.value,U=b+"_"+x;if(C[U]===void 0)return typeof R=="number"||typeof R=="boolean"?C[U]=R:C[U]=R.clone(),!0;{let N=C[U];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return C[U]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function m(v){let b=v.uniforms,x=0,C=16;for(let U=0,N=b.length;U<N;U++){let S=Array.isArray(b[U])?b[U]:[b[U]];for(let M=0,L=S.length;M<L;M++){let V=S[M],E=Array.isArray(V.value)?V.value:[V.value];for(let O=0,z=E.length;O<z;O++){let B=E[O],J=_(B),G=x%C,P=G%J.boundary,q=G+P;x+=P,q!==0&&C-q<J.storage&&(x+=C-q),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=J.storage}}}let R=x%C;return R>0&&(x+=C-R),v.__size=x,v.__cache={},this}function _(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){let b=v.target;b.removeEventListener("dispose",g);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Io=class{constructor(t={}){let{canvas:e=Zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,v=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,C=!1;this._outputColorSpace=ke;let R=0,U=0,N=null,S=-1,M=null,L=new ce,V=new ce,E=null,O=new Gt(0),z=0,B=e.width,J=e.height,G=1,P=null,q=null,A=new ce(0,0,B,J),F=new ce(0,0,B,J),$=!1,Mt=new sr,at=!1,H=!1,Z=new _e,st=new I,ot=new ce,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function Kt(){return N===null?G:1}let D=n;function ct(w,W){return e.getContext(w,W)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),D===null){let W="webgl2";if(D=ct(W,w),D===null)throw ct(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let tt,nt,it,xt,dt,bt,$t,qt,T,y,Y,Q,ht,et,Ot,vt,Ut,Nt,ft,Rt,Wt,Bt,At,jt;function k(){tt=new k_(D),tt.init(),Bt=new _y(D,tt),nt=new L_(D,tt,t,Bt),it=new my(D,tt),nt.reversedDepthBuffer&&f&&it.buffers.depth.setReversed(!0),xt=new G_(D),dt=new ny,bt=new gy(D,tt,it,dt,nt,Bt,xt),$t=new N_(x),qt=new z_(x),T=new Zm(D),At=new P_(D,T),y=new V_(D,T,xt,At),Y=new X_(D,y,T,xt),ft=new W_(D,nt,bt),vt=new U_(dt),Q=new ey(x,$t,qt,tt,nt,At,vt),ht=new by(x,dt),et=new sy,Ot=new hy(tt),Nt=new I_(x,$t,qt,it,Y,d,c),Ut=new fy(x,Y,nt),jt=new My(D,xt,nt,it),Rt=new D_(D,tt,xt),Wt=new H_(D,tt,xt),xt.programs=Q.programs,x.capabilities=nt,x.extensions=tt,x.properties=dt,x.renderLists=et,x.shadowMap=Ut,x.state=it,x.info=xt}k();let gt=new Xh(x,D);this.xr=gt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(B,J,!1))},this.getSize=function(w){return w.set(B,J)},this.setSize=function(w,W,K=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,J=W,e.width=Math.floor(w*G),e.height=Math.floor(W*G),K===!0&&(e.style.width=w+"px",e.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(B*G,J*G).floor()},this.setDrawingBufferSize=function(w,W,K){B=w,J=W,G=K,e.width=Math.floor(w*K),e.height=Math.floor(W*K),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(A)},this.setViewport=function(w,W,K,j){w.isVector4?A.set(w.x,w.y,w.z,w.w):A.set(w,W,K,j),it.viewport(L.copy(A).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(F)},this.setScissor=function(w,W,K,j){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,W,K,j),it.scissor(V.copy(F).multiplyScalar(G).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(w){it.setScissorTest($=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,K=!0){let j=0;if(w){let X=!1;if(N!==null){let mt=N.texture.format;X=mt===xl||mt===_l||mt===gl}if(X){let mt=N.texture.type,Ct=mt===On||mt===zi||mt===ur||mt===fr||mt===pl||mt===ml,Dt=Nt.getClearColor(),It=Nt.getClearAlpha(),Ht=Dt.r,Xt=Dt.g,kt=Dt.b;Ct?(m[0]=Ht,m[1]=Xt,m[2]=kt,m[3]=It,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ht,_[1]=Xt,_[2]=kt,_[3]=It,D.clearBufferiv(D.COLOR,0,_))}else j|=D.COLOR_BUFFER_BIT}W&&(j|=D.DEPTH_BUFFER_BIT),K&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Nt.dispose(),et.dispose(),Ot.dispose(),dt.dispose(),$t.dispose(),qt.dispose(),Y.dispose(),At.dispose(),jt.dispose(),Q.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",qn),gt.removeEventListener("sessionend",Tu),$i.stop()};function St(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=xt.autoReset,W=Ut.enabled,K=Ut.autoUpdate,j=Ut.needsUpdate,X=Ut.type;k(),xt.autoReset=w,Ut.enabled=W,Ut.autoUpdate=K,Ut.needsUpdate=j,Ut.type=X}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){let W=w.target;W.removeEventListener("dispose",lt),Ft(W)}function Ft(w){Zt(w),dt.remove(w)}function Zt(w){let W=dt.get(w).programs;W!==void 0&&(W.forEach(function(K){Q.releaseProgram(K)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,K,j,X,mt){W===null&&(W=_t);let Ct=X.isMesh&&X.matrixWorld.determinant()<0,Dt=Sp(w,W,K,j,X);it.setMaterial(j,Ct);let It=K.index,Ht=1;if(j.wireframe===!0){if(It=y.getWireframeAttribute(K),It===void 0)return;Ht=2}let Xt=K.drawRange,kt=K.attributes.position,ee=Xt.start*Ht,de=(Xt.start+Xt.count)*Ht;mt!==null&&(ee=Math.max(ee,mt.start*Ht),de=Math.min(de,(mt.start+mt.count)*Ht)),It!==null?(ee=Math.max(ee,0),de=Math.min(de,It.count)):kt!=null&&(ee=Math.max(ee,0),de=Math.min(de,kt.count));let Ce=de-ee;if(Ce<0||Ce===1/0)return;At.setup(X,j,Dt,K,It);let ve,pe=Rt;if(It!==null&&(ve=T.get(It),pe=Wt,pe.setIndex(ve)),X.isMesh)j.wireframe===!0?(it.setLineWidth(j.wireframeLinewidth*Kt()),pe.setMode(D.LINES)):pe.setMode(D.TRIANGLES);else if(X.isLine){let Vt=j.linewidth;Vt===void 0&&(Vt=1),it.setLineWidth(Vt*Kt()),X.isLineSegments?pe.setMode(D.LINES):X.isLineLoop?pe.setMode(D.LINE_LOOP):pe.setMode(D.LINE_STRIP)}else X.isPoints?pe.setMode(D.POINTS):X.isSprite&&pe.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))pe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Vt=X._multiDrawStarts,Me=X._multiDrawCounts,ie=X._multiDrawCount,ln=It?T.get(It).bytesPerElement:1,Ps=dt.get(j).currentProgram.getUniforms();for(let cn=0;cn<ie;cn++)Ps.setValue(D,"_gl_DrawID",cn),pe.render(Vt[cn]/ln,Me[cn])}else if(X.isInstancedMesh)pe.renderInstances(ee,Ce,X.count);else if(K.isInstancedBufferGeometry){let Vt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Me=Math.min(K.instanceCount,Vt);pe.renderInstances(ee,Ce,Me)}else pe.render(ee,Ce)};function ge(w,W,K){w.transparent===!0&&w.side===Pe&&w.forceSinglePass===!1?(w.side=tn,w.needsUpdate=!0,Zo(w,W,K),w.side=di,w.needsUpdate=!0,Zo(w,W,K),w.side=Pe):Zo(w,W,K)}this.compile=function(w,W,K=null){K===null&&(K=w),p=Ot.get(K),p.init(W),b.push(p),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),w!==K&&w.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let j=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let mt=X.material;if(mt)if(Array.isArray(mt))for(let Ct=0;Ct<mt.length;Ct++){let Dt=mt[Ct];ge(Dt,K,X),j.add(Dt)}else ge(mt,K,X),j.add(mt)}),p=b.pop(),j},this.compileAsync=function(w,W,K=null){let j=this.compile(w,W,K);return new Promise(X=>{function mt(){if(j.forEach(function(Ct){dt.get(Ct).currentProgram.isReady()&&j.delete(Ct)}),j.size===0){X(w);return}setTimeout(mt,10)}tt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let re=null;function si(w){re&&re(w)}function qn(){$i.stop()}function Tu(){$i.start()}let $i=new Rf;$i.setAnimationLoop(si),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(w){re=w,gt.setAnimationLoop(w),w===null?$i.stop():$i.start()},gt.addEventListener("sessionstart",qn),gt.addEventListener("sessionend",Tu),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(W),W=gt.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,W,N),p=Ot.get(w,b.length),p.init(W),b.push(p),Z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Mt.setFromProjectionMatrix(Z,Pn,W.reversedDepth),H=this.localClippingEnabled,at=vt.init(this.clippingPlanes,H),g=et.get(w,v.length),g.init(),v.push(g),gt.enabled===!0&&gt.isPresenting===!0){let mt=x.xr.getDepthSensingMesh();mt!==null&&yc(mt,W,-1/0,x.sortObjects)}yc(w,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(P,q),zt=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,zt&&Nt.addToRenderList(g,w),this.info.render.frame++,at===!0&&vt.beginShadows();let K=p.state.shadowsArray;Ut.render(K,w,W),at===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,X=g.transmissive;if(p.setupLights(),W.isArrayCamera){let mt=W.cameras;if(X.length>0)for(let Ct=0,Dt=mt.length;Ct<Dt;Ct++){let It=mt[Ct];Au(j,X,w,It)}zt&&Nt.render(w);for(let Ct=0,Dt=mt.length;Ct<Dt;Ct++){let It=mt[Ct];Eu(g,w,It,It.viewport)}}else X.length>0&&Au(j,X,w,W),zt&&Nt.render(w),Eu(g,w,W);N!==null&&U===0&&(bt.updateMultisampleRenderTarget(N),bt.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(x,w,W),At.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],at===!0&&vt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function yc(w,W,K,j){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){j&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Z);let Ct=Y.update(w),Dt=w.material;Dt.visible&&g.push(w,Ct,Dt,K,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){let Ct=Y.update(w),Dt=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ot.copy(Ct.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(Z)),Array.isArray(Dt)){let It=Ct.groups;for(let Ht=0,Xt=It.length;Ht<Xt;Ht++){let kt=It[Ht],ee=Dt[kt.materialIndex];ee&&ee.visible&&g.push(w,Ct,ee,K,ot.z,kt)}}else Dt.visible&&g.push(w,Ct,Dt,K,ot.z,null)}}let mt=w.children;for(let Ct=0,Dt=mt.length;Ct<Dt;Ct++)yc(mt[Ct],W,K,j)}function Eu(w,W,K,j){let X=w.opaque,mt=w.transmissive,Ct=w.transparent;p.setupLightsView(K),at===!0&&vt.setGlobalState(x.clippingPlanes,K),j&&it.viewport(L.copy(j)),X.length>0&&$o(X,W,K),mt.length>0&&$o(mt,W,K),Ct.length>0&&$o(Ct,W,K),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Au(w,W,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Zn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?dr:On,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let mt=p.state.transmissionRenderTarget[j.id],Ct=j.viewport||L;mt.setSize(Ct.z*x.transmissionResolutionScale,Ct.w*x.transmissionResolutionScale);let Dt=x.getRenderTarget(),It=x.getActiveCubeFace(),Ht=x.getActiveMipmapLevel();x.setRenderTarget(mt),x.getClearColor(O),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),zt&&Nt.render(K);let Xt=x.toneMapping;x.toneMapping=pi;let kt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),at===!0&&vt.setGlobalState(x.clippingPlanes,j),$o(w,K,j),bt.updateMultisampleRenderTarget(mt),bt.updateRenderTargetMipmap(mt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let de=0,Ce=W.length;de<Ce;de++){let ve=W[de],pe=ve.object,Vt=ve.geometry,Me=ve.material,ie=ve.group;if(Me.side===Pe&&pe.layers.test(j.layers)){let ln=Me.side;Me.side=tn,Me.needsUpdate=!0,Cu(pe,K,j,Vt,Me,ie),Me.side=ln,Me.needsUpdate=!0,ee=!0}}ee===!0&&(bt.updateMultisampleRenderTarget(mt),bt.updateRenderTargetMipmap(mt))}x.setRenderTarget(Dt,It,Ht),x.setClearColor(O,z),kt!==void 0&&(j.viewport=kt),x.toneMapping=Xt}function $o(w,W,K){let j=W.isScene===!0?W.overrideMaterial:null;for(let X=0,mt=w.length;X<mt;X++){let Ct=w[X],Dt=Ct.object,It=Ct.geometry,Ht=Ct.group,Xt=Ct.material;Xt.allowOverride===!0&&j!==null&&(Xt=j),Dt.layers.test(K.layers)&&Cu(Dt,W,K,It,Xt,Ht)}}function Cu(w,W,K,j,X,mt){w.onBeforeRender(x,W,K,j,X,mt),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(x,W,K,j,w,mt),X.transparent===!0&&X.side===Pe&&X.forceSinglePass===!1?(X.side=tn,X.needsUpdate=!0,x.renderBufferDirect(K,W,j,X,w,mt),X.side=di,X.needsUpdate=!0,x.renderBufferDirect(K,W,j,X,w,mt),X.side=Pe):x.renderBufferDirect(K,W,j,X,w,mt),w.onAfterRender(x,W,K,j,X,mt)}function Zo(w,W,K){W.isScene!==!0&&(W=_t);let j=dt.get(w),X=p.state.lights,mt=p.state.shadowsArray,Ct=X.state.version,Dt=Q.getParameters(w,X.state,mt,W,K),It=Q.getProgramCacheKey(Dt),Ht=j.programs;j.environment=w.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(w.isMeshStandardMaterial?qt:$t).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",lt),Ht=new Map,j.programs=Ht);let Xt=Ht.get(It);if(Xt!==void 0){if(j.currentProgram===Xt&&j.lightsStateVersion===Ct)return Iu(w,Dt),Xt}else Dt.uniforms=Q.getUniforms(w),w.onBeforeCompile(Dt,x),Xt=Q.acquireProgram(Dt,It),Ht.set(It,Xt),j.uniforms=Dt.uniforms;let kt=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=vt.uniform),Iu(w,Dt),j.needsLights=Tp(w),j.lightsStateVersion=Ct,j.needsLights&&(kt.ambientLightColor.value=X.state.ambient,kt.lightProbe.value=X.state.probe,kt.directionalLights.value=X.state.directional,kt.directionalLightShadows.value=X.state.directionalShadow,kt.spotLights.value=X.state.spot,kt.spotLightShadows.value=X.state.spotShadow,kt.rectAreaLights.value=X.state.rectArea,kt.ltc_1.value=X.state.rectAreaLTC1,kt.ltc_2.value=X.state.rectAreaLTC2,kt.pointLights.value=X.state.point,kt.pointLightShadows.value=X.state.pointShadow,kt.hemisphereLights.value=X.state.hemi,kt.directionalShadowMap.value=X.state.directionalShadowMap,kt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,kt.spotShadowMap.value=X.state.spotShadowMap,kt.spotLightMatrix.value=X.state.spotLightMatrix,kt.spotLightMap.value=X.state.spotLightMap,kt.pointShadowMap.value=X.state.pointShadowMap,kt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Xt,j.uniformsList=null,Xt}function Ru(w){if(w.uniformsList===null){let W=w.currentProgram.getUniforms();w.uniformsList=xr.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Iu(w,W){let K=dt.get(w);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Sp(w,W,K,j,X){W.isScene!==!0&&(W=_t),bt.resetTextureUnits();let mt=W.fog,Ct=j.isMeshStandardMaterial?W.environment:null,Dt=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ss,It=(j.isMeshStandardMaterial?qt:$t).get(j.envMap||Ct),Ht=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),kt=!!K.morphAttributes.position,ee=!!K.morphAttributes.normal,de=!!K.morphAttributes.color,Ce=pi;j.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ce=x.toneMapping);let ve=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pe=ve!==void 0?ve.length:0,Vt=dt.get(j),Me=p.state.lights;if(at===!0&&(H===!0||w!==M)){let Ke=w===M&&j.id===S;vt.setState(j,w,Ke)}let ie=!1;j.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Me.state.version||Vt.outputColorSpace!==Dt||X.isBatchedMesh&&Vt.batching===!1||!X.isBatchedMesh&&Vt.batching===!0||X.isBatchedMesh&&Vt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Vt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Vt.instancing===!1||!X.isInstancedMesh&&Vt.instancing===!0||X.isSkinnedMesh&&Vt.skinning===!1||!X.isSkinnedMesh&&Vt.skinning===!0||X.isInstancedMesh&&Vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Vt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Vt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Vt.instancingMorph===!1&&X.morphTexture!==null||Vt.envMap!==It||j.fog===!0&&Vt.fog!==mt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==vt.numPlanes||Vt.numIntersection!==vt.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Xt||Vt.morphTargets!==kt||Vt.morphNormals!==ee||Vt.morphColors!==de||Vt.toneMapping!==Ce||Vt.morphTargetsCount!==pe)&&(ie=!0):(ie=!0,Vt.__version=j.version);let ln=Vt.currentProgram;ie===!0&&(ln=Zo(j,W,X));let Ps=!1,cn=!1,Er=!1,Se=ln.getUniforms(),gn=Vt.uniforms;if(it.useProgram(ln.program)&&(Ps=!0,cn=!0,Er=!0),j.id!==S&&(S=j.id,cn=!0),Ps||M!==w){it.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Se.setValue(D,"projectionMatrix",w.projectionMatrix),Se.setValue(D,"viewMatrix",w.matrixWorldInverse);let nn=Se.map.cameraPosition;nn!==void 0&&nn.setValue(D,st.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&Se.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Se.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,cn=!0,Er=!0)}if(X.isSkinnedMesh){Se.setOptional(D,X,"bindMatrix"),Se.setOptional(D,X,"bindMatrixInverse");let Ke=X.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Se.setValue(D,"boneTexture",Ke.boneTexture,bt))}X.isBatchedMesh&&(Se.setOptional(D,X,"batchingTexture"),Se.setValue(D,"batchingTexture",X._matricesTexture,bt),Se.setOptional(D,X,"batchingIdTexture"),Se.setValue(D,"batchingIdTexture",X._indirectTexture,bt),Se.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Se.setValue(D,"batchingColorTexture",X._colorsTexture,bt));let _n=K.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ft.update(X,K,ln),(cn||Vt.receiveShadow!==X.receiveShadow)&&(Vt.receiveShadow=X.receiveShadow,Se.setValue(D,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(gn.envMap.value=It,gn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(gn.envMapIntensity.value=W.environmentIntensity),cn&&(Se.setValue(D,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&wp(gn,Er),mt&&j.fog===!0&&ht.refreshFogUniforms(gn,mt),ht.refreshMaterialUniforms(gn,j,G,J,p.state.transmissionRenderTarget[w.id]),xr.upload(D,Ru(Vt),gn,bt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(xr.upload(D,Ru(Vt),gn,bt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Se.setValue(D,"center",X.center),Se.setValue(D,"modelViewMatrix",X.modelViewMatrix),Se.setValue(D,"normalMatrix",X.normalMatrix),Se.setValue(D,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Ke=j.uniformsGroups;for(let nn=0,vc=Ke.length;nn<vc;nn++){let Zi=Ke[nn];jt.update(Zi,ln),jt.bind(Zi,ln)}}return ln}function wp(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Tp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,W,K){let j=dt.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),dt.get(w.texture).__webglTexture=W,dt.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){let K=dt.get(w);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};let Ep=D.createFramebuffer();this.setRenderTarget=function(w,W=0,K=0){N=w,R=W,U=K;let j=!0,X=null,mt=!1,Ct=!1;if(w){let It=dt.get(w);if(It.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(It.__webglFramebuffer===void 0)bt.setupRenderTarget(w);else if(It.__hasExternalTextures)bt.rebindTextures(w,dt.get(w.texture).__webglTexture,dt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let kt=w.depthTexture;if(It.__boundDepthTexture!==kt){if(kt!==null&&dt.has(kt)&&(w.width!==kt.image.width||w.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");bt.setupDepthRenderbuffer(w)}}let Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ct=!0);let Xt=dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[W])?X=Xt[W][K]:X=Xt[W],mt=!0):w.samples>0&&bt.useMultisampledRTT(w)===!1?X=dt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?X=Xt[K]:X=Xt,L.copy(w.viewport),V.copy(w.scissor),E=w.scissorTest}else L.copy(A).multiplyScalar(G).floor(),V.copy(F).multiplyScalar(G).floor(),E=$;if(K!==0&&(X=Ep),it.bindFramebuffer(D.FRAMEBUFFER,X)&&j&&it.drawBuffers(w,X),it.viewport(L),it.scissor(V),it.setScissorTest(E),mt){let It=dt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,It.__webglTexture,K)}else if(Ct){let It=W;for(let Ht=0;Ht<w.textures.length;Ht++){let Xt=dt.get(w.textures[Ht]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,K,It)}}else if(w!==null&&K!==0){let It=dt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,It.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(w,W,K,j,X,mt,Ct,Dt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){it.bindFramebuffer(D.FRAMEBUFFER,It);try{let Ht=w.textures[Dt],Xt=Ht.format,kt=Ht.type;if(!nt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-j&&K>=0&&K<=w.height-X&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Dt),D.readPixels(W,K,j,X,Bt.convert(Xt),Bt.convert(kt),mt))}finally{let Ht=N!==null?dt.get(N).__webglFramebuffer:null;it.bindFramebuffer(D.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,W,K,j,X,mt,Ct,Dt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(W>=0&&W<=w.width-j&&K>=0&&K<=w.height-X){it.bindFramebuffer(D.FRAMEBUFFER,It);let Ht=w.textures[Dt],Xt=Ht.format,kt=Ht.type;if(!nt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ee),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Dt),D.readPixels(W,K,j,X,Bt.convert(Xt),Bt.convert(kt),0);let de=N!==null?dt.get(N).__webglFramebuffer:null;it.bindFramebuffer(D.FRAMEBUFFER,de);let Ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Jd(D,Ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ee),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.deleteBuffer(ee),D.deleteSync(Ce),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,K=0){let j=Math.pow(2,-K),X=Math.floor(w.image.width*j),mt=Math.floor(w.image.height*j),Ct=W!==null?W.x:0,Dt=W!==null?W.y:0;bt.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Ct,Dt,X,mt),it.unbindTexture()};let Ap=D.createFramebuffer(),Cp=D.createFramebuffer();this.copyTextureToTexture=function(w,W,K=null,j=null,X=0,mt=null){mt===null&&(X!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=X,X=0):mt=0);let Ct,Dt,It,Ht,Xt,kt,ee,de,Ce,ve=w.isCompressedTexture?w.mipmaps[mt]:w.image;if(K!==null)Ct=K.max.x-K.min.x,Dt=K.max.y-K.min.y,It=K.isBox3?K.max.z-K.min.z:1,Ht=K.min.x,Xt=K.min.y,kt=K.isBox3?K.min.z:0;else{let _n=Math.pow(2,-X);Ct=Math.floor(ve.width*_n),Dt=Math.floor(ve.height*_n),w.isDataArrayTexture?It=ve.depth:w.isData3DTexture?It=Math.floor(ve.depth*_n):It=1,Ht=0,Xt=0,kt=0}j!==null?(ee=j.x,de=j.y,Ce=j.z):(ee=0,de=0,Ce=0);let pe=Bt.convert(W.format),Vt=Bt.convert(W.type),Me;W.isData3DTexture?(bt.setTexture3D(W,0),Me=D.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(bt.setTexture2DArray(W,0),Me=D.TEXTURE_2D_ARRAY):(bt.setTexture2D(W,0),Me=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);let ie=D.getParameter(D.UNPACK_ROW_LENGTH),ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ps=D.getParameter(D.UNPACK_SKIP_PIXELS),cn=D.getParameter(D.UNPACK_SKIP_ROWS),Er=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ht),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kt);let Se=w.isDataArrayTexture||w.isData3DTexture,gn=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){let _n=dt.get(w),Ke=dt.get(W),nn=dt.get(_n.__renderTarget),vc=dt.get(Ke.__renderTarget);it.bindFramebuffer(D.READ_FRAMEBUFFER,nn.__webglFramebuffer),it.bindFramebuffer(D.DRAW_FRAMEBUFFER,vc.__webglFramebuffer);for(let Zi=0;Zi<It;Zi++)Se&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dt.get(w).__webglTexture,X,kt+Zi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dt.get(W).__webglTexture,mt,Ce+Zi)),D.blitFramebuffer(Ht,Xt,Ct,Dt,ee,de,Ct,Dt,D.DEPTH_BUFFER_BIT,D.NEAREST);it.bindFramebuffer(D.READ_FRAMEBUFFER,null),it.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||dt.has(w)){let _n=dt.get(w),Ke=dt.get(W);it.bindFramebuffer(D.READ_FRAMEBUFFER,Ap),it.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cp);for(let nn=0;nn<It;nn++)Se?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_n.__webglTexture,X,kt+nn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_n.__webglTexture,X),gn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,mt,Ce+nn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ke.__webglTexture,mt),X!==0?D.blitFramebuffer(Ht,Xt,Ct,Dt,ee,de,Ct,Dt,D.COLOR_BUFFER_BIT,D.NEAREST):gn?D.copyTexSubImage3D(Me,mt,ee,de,Ce+nn,Ht,Xt,Ct,Dt):D.copyTexSubImage2D(Me,mt,ee,de,Ht,Xt,Ct,Dt);it.bindFramebuffer(D.READ_FRAMEBUFFER,null),it.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else gn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Me,mt,ee,de,Ce,Ct,Dt,It,pe,Vt,ve.data):W.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,mt,ee,de,Ce,Ct,Dt,It,pe,ve.data):D.texSubImage3D(Me,mt,ee,de,Ce,Ct,Dt,It,pe,Vt,ve):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,ee,de,Ct,Dt,pe,Vt,ve.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,ee,de,ve.width,ve.height,pe,ve.data):D.texSubImage2D(D.TEXTURE_2D,mt,ee,de,Ct,Dt,pe,Vt,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,ie),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ps),D.pixelStorei(D.UNPACK_SKIP_ROWS,cn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Er),mt===0&&W.generateMipmaps&&D.generateMipmap(Me),it.unbindTexture()},this.initRenderTarget=function(w){dt.get(w).__webglFramebuffer===void 0&&bt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?bt.setTextureCube(w,0):w.isData3DTexture?bt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?bt.setTexture2DArray(w,0):bt.setTexture2D(w,0),it.unbindTexture()},this.resetState=function(){R=0,U=0,N=null,it.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Uf={type:"change"},$h={type:"start"},Ff={type:"end"},jl=new Ii,Nf=new sn,Sy=Math.cos(70*mr.DEG2RAD),Ne=new I,an=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yh=1e-6,Ql=class extends bo{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new vn,this._lastTargetPosition=new I,this._quat=new vn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hr,this._sphericalDelta=new hr,this._scale=1,this._panOffset=new I,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new I,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ty.bind(this),this._onPointerDown=wy.bind(this),this._onPointerUp=Ey.bind(this),this._onContextMenu=Ly.bind(this),this._onMouseWheel=Ry.bind(this),this._onKeyDown=Iy.bind(this),this._onTouchStart=Py.bind(this),this._onTouchMove=Dy.bind(this),this._onMouseDown=Ay.bind(this),this._onMouseMove=Cy.bind(this),this._interceptControlDown=Uy.bind(this),this._interceptControlUp=Ny.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uf),this.update(),this.state=fe.NONE}update(t=null){let e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ne.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(jl.origin.copy(this.object.position),jl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jl.direction))<Sy?this.object.lookAt(this.target):(Nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),jl.intersectPlane(Nf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yh||this._lastTargetPosition.distanceToSquared(this.target)>Yh?(this.dispatchEvent(Uf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ne.copy(s).sub(this.target);let r=Ne.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function wy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ty(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ey(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ff),this.state=fe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ay(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case Fi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case Fi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent($h)}function Cy(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ry(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent($h),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ff))}function Iy(i){this.enabled!==!1&&this._handleKeyDown(i)}function Py(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent($h)}function Dy(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function Ly(i){this.enabled!==!1&&i.preventDefault()}function Uy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ny(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ki={format:"house-studio-3d",version:1,name:"My little house",preset:"my-little-house",items:[{id:"item-mu824cnw-109",type:"basin",x:-2.7,z:.30000000000000004,rot:3.141592653589793,w:.6,d:.43,h:.84,color:"#c6ac83",open:!1},{id:"item-mu824cnw-110",type:"toilet",x:-3.3000000000000003,z:-2,rot:0,w:.38,d:.66,h:.78,color:"#eeeeea",open:!1},{id:"item-mu824cnw-112",type:"outdoor",x:-.65,z:-2.91,rot:0,w:1.15,d:.45,h:.75,color:"#bda178",open:!1},{id:"item-mu824cnw-113",type:"plant",x:-1.82,z:-2.9,rot:0,w:.35,d:.35,h:.9,color:"#bac8ae",open:!1},{id:"item-mu824cnw-114",type:"plant",x:2.65,z:2.9,rot:0,w:.35,d:.35,h:.9,color:"#bac8ae",open:!1},{id:"item-mu824cnw-117",type:"chair",x:1.1,z:-.8,rot:1.5707963267948966,w:.59,d:.59,h:1.05,color:"#425956",open:!1},{id:"item-mu824cnw-118",type:"wardrobe",x:-1.9000000000000001,z:-.5,rot:1.5707963267948966,w:1.1,d:.55,h:2.15,color:"#343b3b",open:!1},{id:"item-mu825pvw-126",type:"wardrobe",x:-1.9000000000000001,z:.6000000000000001,rot:1.5707963267948966,w:1.1,d:.55,h:2.15,color:"#343b3b",open:!1},{id:"item-mu8265dy-129",type:"desk160",x:1.8,z:-.8,rot:4.71238898038469,w:1.6,d:.75,h:.75,color:"#343b3b",open:!1},{id:"item-mu8276v5-130",type:"lamp",x:-3.3000000000000003,z:.30000000000000004,rot:0,w:.32,d:.32,h:1.55,color:"#ebdfc7",open:!1},{id:"item-mvlvr14r-44",type:"bed5",x:1.3,z:1.2000000000000002,rot:3.141592653589793,w:1.624,d:2.1,h:.88,color:"#d9d7c8"}],structure:{bounds:{left:-2.25,right:2.25,back:-2.375,front:2.375},bathroom:{x:-3,z:-.9,w:1.5,d:3},balcony:{depth:1},openings:[{id:"front-door",kind:"door",side:"back",at:1.1,w:2,h:2,sill:0},{id:"right-window",kind:"window",side:"right",at:-.7000000000000001,w:1,h:1.1,sill:1},{id:"left-window",kind:"window",side:"left",at:1.7000000000000002,w:1,h:1.1,sill:1},{id:"rear-window",kind:"window",side:"back",at:-1,w:1,h:1.1,sill:1},{id:"bath-window",kind:"window",side:"bath-left",at:-.95,w:.6,h:.45,sill:2.1},{id:"door-mu81p2c9",kind:"door",side:"front",at:-1.55,w:.8,h:2,sill:0},{id:"door-mu8209r5",kind:"door",side:"left",at:-1.55,w:.8,h:2,sill:0}],partitions:[],colors:{wall:"#eeeae0",floor:"#c5bfb4",foundation:"#b2b4a7",bathWall:"#e0ded4",bathFloor:"#2f302c",roof:"#454d48",bathRoof:"#525e55",balcony:"#a58b67",rail:"#866e50",door:"#9a8262",window:"#9dbab6",frame:"#38433f",trim:"#d8d3c8",garden:"#9ba990"}}};var Of={format:"house-studio-3d",version:1,name:"My room \xB7 video model",preset:"video-room",items:[{id:"video-bed",type:"timberBed",x:.45,z:-1.13,rot:0,w:1.6,d:2.13,h:.94,color:"#748dcb"},{id:"video-desk",type:"timberDesk",x:-.9,z:-1.1,rot:0,w:1,d:.58,h:.75,color:"#985d35"},{id:"video-chair",type:"wireChair",x:-.86,z:-.33,rot:Math.PI,w:.48,d:.52,h:.95,color:"#252723"},{id:"video-wardrobe",type:"timberWardrobe",x:-1.57,z:.62,rot:Math.PI/2,w:1.25,d:.57,h:2.03,color:"#aa6936"},{id:"video-shelf",type:"leaningShelf",x:1.66,z:.12,rot:-Math.PI/2,w:.85,d:.36,h:1.76,color:"#d4c29f"},{id:"video-narrow-shelf",type:"leaningShelf",x:1.25,z:.33,rot:0,w:.36,d:.3,h:1.6,color:"#d4c29f"},{id:"video-basket",type:"laundryBasket",x:-.2,z:1.05,rot:0,w:.47,d:.38,h:.4,color:"#c3a4ad"}],structure:{bounds:{left:-1.95,right:1.95,back:-2.3,front:2.3},bathroom:{enabled:!1,x:-2.7,z:-.8,w:1.5,d:3,side:"left",start:-2.3,end:.7,depth:1.5},balcony:{enabled:!1,depth:1},room:{kind:"video-bedroom",estimated:!0,height:2.48,stairWidth:.88,stairRun:1.65,stairDrop:1.8,ladderRun:.88},openings:[{id:"video-back-window",kind:"window",side:"back",at:0,w:2.9,h:.66,sill:1.12,style:"horizontal"},{id:"video-high-window",kind:"window",side:"back",at:-1.02,w:.58,h:.52,sill:1.88,style:"high"},{id:"video-bed-window",kind:"window",side:"right",at:-1.05,w:1.36,h:1.35,sill:.77,style:"curtained"},{id:"video-stair-window",kind:"window",side:"right",at:1.37,w:.83,h:1.35,sill:.59,style:"curtained"},{id:"video-entry",kind:"door",side:"front",at:.4,w:.8,h:2.1,sill:0,style:"open"}],partitions:[],wallSplits:{front:[],back:[],left:[],right:[]},segmentColors:{},wallVisibility:{front:"hidden",left:"low",right:"full",back:"full","bath-front":"low","bath-back":"full","bath-left":"low","bath-right":"low"},finishes:{floor:{material:"wood",scale:.65,rotation:90},bathFloor:{material:"tiles",scale:.3,rotation:0}},colors:{...ki.structure.colors,wall:"#d3ddcc",floor:"#ba773b",foundation:"#68472f",frame:"#684a37",window:"#e5e9de",trim:"#573e2e",roof:"#87a755",panel:"#4a382b",curtain:"#292744"}}};function bs(i){let t=i.bounds,e=i.room;return{left:t.right-e.stairWidth,right:t.right,back:t.front-e.stairRun,front:t.front}}function tc(i){let t=i.bounds,e=i.room;return{x:t.right-e.stairWidth-.37,z:t.front-.12-e.ladderRun/2,w:.65,d:e.ladderRun+.12}}function Bf(i){let t=i.bounds,e=bs(i);return[{left:t.left,right:e.left,back:t.back,front:t.front},{left:e.left,right:t.right,back:t.back,front:e.back}].filter(n=>n.right-n.left>.01&&n.front-n.back>.01)}var Re=["front","back","left","right"],Bn=[...Re,...Re.map(i=>"bath-"+i)],Fy={front:"back",back:"front",left:"right",right:"left"},Vi={front:"Front",back:"Back",left:"Left",right:"Right"},gi=[{id:"marble",name:"Veined marble",detail:"Soft, flowing veins",scale:.8,roughness:.24},{id:"stone",name:"Natural stone",detail:"Layered mineral texture",scale:.6,roughness:.82},{id:"wood",name:"Wood planks",detail:"Long grain & board joints",scale:1.2,roughness:.64},{id:"herringbone",name:"Herringbone wood",detail:"Interlocking parquet",scale:1.2,roughness:.64},{id:"matte",name:"Matt porcelain",detail:"Soft, unpolished tiles",scale:.6,roughness:.98},{id:"concrete",name:"Microcement",detail:"Continuous, fine texture",scale:1.5,roughness:.96},{id:"terrazzo",name:"Terrazzo",detail:"Fine stone chips",scale:.6,roughness:.48},{id:"tiles",name:"Ceramic tiles",detail:"Classic square grout grid",scale:.3,roughness:.32}],Oy=Object.fromEntries(Bn.map(i=>[i,i==="back"||i==="bath-back"?"full":"low"]));function ae(i,t){let e=i.bathroom,n=t.startsWith("bath-")?{left:e.x-e.w/2,right:e.x+e.w/2,back:e.z-e.d/2,front:e.z+e.d/2}:i.bounds,s=t.replace("bath-","");return s==="front"||s==="back"?{axis:"x",start:n.left,end:n.right,fixed:s==="front"?n.front:n.back,side:t}:{axis:"z",start:n.back,end:n.front,fixed:s==="left"?n.left:n.right,side:t}}function Hi(i){return i.bathroom.side?"bath-"+Fy[i.bathroom.side]:null}function Po(i){return Bn.filter(t=>(i.bathroom.enabled!==!1||!t.startsWith("bath-"))&&t!==Hi(i)).map(t=>ae(i,t))}function Mn(i,t){let e=ae(i,t),n=[e.start,...(i.wallSplits?.[t]||[]).filter(s=>s>e.start+.05&&s<e.end-.05),e.end].sort((s,r)=>s-r);return n.slice(1).map((s,r)=>({...e,id:`segment-${t}-${r}`,index:r,start:n[r],end:s}))}function ec(i,t){return Re.flatMap(e=>Mn(i,e)).find(e=>e.id===t)}function Do(i){let t=i.bathroom,e=i.bounds;if(!Re.includes(t.side)){t.side=Re.reduce((a,c)=>{let l={left:Math.abs(t.x+t.w/2-e.left),right:Math.abs(t.x-t.w/2-e.right),front:Math.abs(t.z-t.d/2-e.front),back:Math.abs(t.z+t.d/2-e.back)};return l[c]<l[a]?c:a},"left");let o=t.side==="left"||t.side==="right";t.start=o?t.z-t.d/2:t.x-t.w/2,t.end=t.start+(o?t.d:t.w),t.depth=o?t.w:t.d}let n=ae(i,t.side),s=Math.min(n.end-n.start,Math.max(.8,t.end-t.start));t.start=Math.min(n.end-s,Math.max(n.start,t.start)),t.end=t.start+s;let r=(t.start+t.end)/2;return n.axis==="z"?(t.w=t.depth,t.d=s,t.x=n.fixed+(t.side==="left"?-1:1)*t.depth/2,t.z=r):(t.w=s,t.d=t.depth,t.x=r,t.z=n.fixed+(t.side==="back"?-1:1)*t.depth/2),t}function Lo(i){let t=JSON.parse(JSON.stringify(i));Do(t),t.wallSplits=Object.fromEntries(Re.map(r=>[r,[...new Set(t.wallSplits?.[r]||[])].sort((o,a)=>o-a)])),t.segmentColors||(t.segmentColors={}),t.finishes||(t.finishes={});for(let r of["floor","bathFloor"])t.finishes[r]={material:r==="floor"?"marble":"tiles",scale:r==="floor"?.8:.3,rotation:0,...t.finishes[r]};t.wallVisibility={...Oy,...t.wallVisibility};let e=t.bathroom,n=ae(t,e.side);if(e.enabled===!1)return t;for(let r of[e.start,e.end])r>n.start+.05&&r<n.end-.05&&!t.wallSplits[e.side].some(o=>Math.abs(o-r)<.03)&&t.wallSplits[e.side].push(r);t.wallSplits[e.side].sort((r,o)=>r-o);let s=Hi(t);for(let r of t.openings.filter(o=>o.side===s))t.openings.some(o=>o.side===e.side&&o.kind===r.kind&&Math.abs(o.at-r.at)<.1)||t.openings.push({...r,side:e.side});return t.openings=t.openings.filter(r=>r.side!==s),t}function zf(i,t,e){var a;if(!Re.includes(t)||!Number.isFinite(e))throw new Error("Choose an exterior wall and a split position.");let n=ae(i,t);if(e<n.start+.25||e>n.end-.25)throw new Error("Leave at least 25 cm at either end of the wall.");if(i.wallSplits||(i.wallSplits={}),(a=i.wallSplits)[t]||(a[t]=[]),i.wallSplits[t].length>=12)throw new Error("This wall already has 12 split points.");if(i.wallSplits[t].some(c=>Math.abs(c-e)<.05))throw new Error("There is already a split here.");let s=Mn(i,t).find(c=>e>c.start&&e<c.end);if(!s||e-s.start<.25||s.end-e<.25)throw new Error("Leave at least 25 cm in each wall section.");let r=Mn(i,t),o={...i.segmentColors};i.wallSplits[t].push(e),i.wallSplits[t].sort((c,l)=>c-l),i.segmentColors||(i.segmentColors={});for(let c of Mn(i,t)){let l=r.find(h=>(c.start+c.end)/2>=h.start&&(c.start+c.end)/2<=h.end);o[l?.id]&&(i.segmentColors[c.id]=o[l.id])}return Mn(i,t).find(c=>Math.abs(c.start-e)<.001)}function Zh(i,t,e,n,s=i.bathroom.depth||1.5){let r=ae(i,t);if(!Re.includes(t)||![e,n,s].every(Number.isFinite)||e<r.start-.001||n>r.end+.001||n-e<.8||s<.8||s>4)throw new Error("Choose at least 80 cm of wall and an extension depth from 0.8 to 4 m.");let o={...i.bathroom};i.bathroom={...o,enabled:!0,side:t,start:e,end:n,depth:s},Do(i);let a=i.bathroom;if(Math.max(Math.abs(a.x-a.w/2),Math.abs(a.x+a.w/2),Math.abs(a.z-a.d/2),Math.abs(a.z+a.d/2))>6)throw i.bathroom=o,new Error("The extension must stay within the 12 m planning area.");for(let l of i.openings.filter(h=>h.side.startsWith("bath-")))l.side="bath-"+t,l.at=(e+n)/2,l.w=Math.min(l.w,n-e-.3);if(i.openings=i.openings.filter(l=>l.id!=="bath-access-auto"||l.side===t),!i.openings.some(l=>l.kind==="door"&&l.side===t&&l.at-l.w/2>=e+.05&&l.at+l.w/2<=n-.05)){let l=Math.min(.8,n-e-.2),h=i.openings.filter(d=>d.side===t),f=[(e+n)/2,...Array.from({length:Math.ceil((n-e)*10)},(d,m)=>e+.1+l/2+m*.1)].find(d=>d-l/2>=e+.05&&d+l/2<=n-.05&&!h.some(m=>Math.abs(m.at-d)<(m.w+l)/2+.05));f!==void 0&&i.openings.push({id:"bath-access-auto",kind:"door",side:t,at:f,w:l,h:2,sill:0})}let c=Lo(i);return Object.assign(i,c),i.bathroom}function Jh(i){let t=[];for(let n of i.openings){let s=ae(i,n.side);(n.at-n.w/2<s.start+.02||n.at+n.w/2>s.end-.02)&&t.push(`${n.id}: opening extends beyond its wall.`)}let e=i.bathroom;return e.enabled!==!1&&e.side&&!i.openings.some(n=>n.side===e.side&&n.kind==="door"&&n.at-n.w/2>=e.start&&n.at+n.w/2<=e.end)&&t.push("Add a door within the bathroom wall section to connect the rooms."),t}var Tt=.38;var ic=[{type:"bed3",name:"3 ft single bed",cat:"Sleep",w:.9144+.1,d:2.1,h:.82,kind:"bed",color:"#d9d7c8"},{type:"bed35",name:"3.5 ft single bed",cat:"Sleep",w:1.0668+.1,d:2.1,h:.82,kind:"bed",color:"#d9d7c8"},{type:"bed5",name:"5 ft queen bed",cat:"Sleep",w:1.524+.1,d:2.1,h:.88,kind:"bed",color:"#d9d7c8"},{type:"bed6",name:"6 ft king bed",cat:"Sleep",w:1.8288+.1,d:2.1,h:.88,kind:"bed",color:"#d9d7c8"},{type:"loft35",name:"3.5 ft loft bed",cat:"Sleep",w:1.17,d:2.14,h:2.25,kind:"loft",color:"#c6ac83"},{type:"loft5",name:"5 ft loft bed",cat:"Sleep",w:1.63,d:2.14,h:2.25,kind:"loft",color:"#c6ac83"},{type:"sofabed",name:"Convertible sofa bed",cat:"Sleep",w:1.55,d:.88,h:.84,kind:"sofabed",color:"#a7b7a0"},{type:"nightstand",name:"Bedside table",cat:"Storage",w:.4,d:.38,h:.48,kind:"nightstand",color:"#c6ac83"},{type:"desk140",name:"140 cm work desk",cat:"Work",w:1.4,d:.65,h:.75,kind:"desk",color:"#c6ac83"},{type:"desk160",name:"160 cm gaming desk",cat:"Work",w:1.6,d:.75,h:.75,kind:"gaming",color:"#343b3b"},{type:"chair",name:"Office chair",cat:"Work",w:.59,d:.59,h:1.05,kind:"chair",color:"#425956"},{type:"shelf",name:"Open bookshelf",cat:"Storage",w:.75,d:.32,h:1.65,kind:"shelf",color:"#c6ac83"},{type:"wardrobe",name:"Sliding wardrobe",cat:"Storage",w:1.1,d:.55,h:2.15,kind:"wardrobe",color:"#e7e6dc"},{type:"cabinet",name:"Low cabinet",cat:"Storage",w:1.2,d:.38,h:.64,kind:"cabinet",color:"#c6ac83"},{type:"sofa",name:"Two-seat sofa",cat:"Living",w:1.5,d:.78,h:.8,kind:"sofa",color:"#a7b7a0"},{type:"coffee",name:"Low coffee table",cat:"Living",w:.75,d:.45,h:.38,kind:"coffee",color:"#c6ac83"},{type:"tv",name:"TV & media cabinet",cat:"Living",w:1.2,d:.35,h:1.25,kind:"tv",color:"#c6ac83"},{type:"table",name:"Compact dining table",cat:"Living",w:.8,d:.7,h:.75,kind:"table",color:"#c6ac83"},{type:"stool",name:"Oak stool",cat:"Living",w:.35,d:.35,h:.46,kind:"stool",color:"#c6ac83"},{type:"fridge",name:"Compact refrigerator",cat:"Kitchen",w:.55,d:.52,h:1.2,kind:"fridge",color:"#e5e8e4"},{type:"pantry",name:"Mini pantry & sink",cat:"Kitchen",w:1.2,d:.58,h:.88,kind:"pantry",color:"#e7e6dc"},{type:"basin",name:"Vanity & basin",cat:"Bath",w:.6,d:.43,h:.84,kind:"basin",color:"#c6ac83"},{type:"toilet",name:"Toilet",cat:"Bath",w:.38,d:.66,h:.78,kind:"toilet",color:"#eeeeea"},{type:"shower",name:"Glass shower",cat:"Bath",w:1.2,d:.8,h:2.15,kind:"shower",color:"#b9cfcc"},{type:"plant",name:"Potted plant",cat:"Garden",w:.35,d:.35,h:.9,kind:"plant",color:"#bac8ae"},{type:"tallplant",name:"Tall indoor plant",cat:"Garden",w:.48,d:.48,h:1.5,kind:"plant",color:"#526d53"},{type:"outdoor",name:"Balcony bench",cat:"Garden",w:1.15,d:.45,h:.75,kind:"outdoor",color:"#bda178"},{type:"rug",name:"Woven area rug",cat:"Decor",w:1.5,d:1.2,h:.015,kind:"rug",color:"#c9c4aa"},{type:"lamp",name:"Floor lamp",cat:"Decor",w:.32,d:.32,h:1.55,kind:"lamp",color:"#ebdfc7"},{type:"timberBed",name:"Timber spindle bed",cat:"Sleep",w:1.6,d:2.13,h:.94,kind:"bed",roomModel:"bed",color:"#748dcb"},{type:"timberDesk",name:"Wooden bedroom desk",cat:"Work",w:1,d:.58,h:.75,kind:"desk",roomModel:"desk",color:"#985d35"},{type:"wireChair",name:"Black woven chair",cat:"Work",w:.48,d:.52,h:.95,kind:"chair",roomModel:"chair",color:"#252723"},{type:"timberWardrobe",name:"Timber double wardrobe",cat:"Storage",w:1.25,d:.57,h:2.03,kind:"wardrobe",roomModel:"wardrobe",color:"#aa6936"},{type:"leaningShelf",name:"Leaning storage shelves",cat:"Storage",w:.85,d:.36,h:1.76,kind:"shelf",roomModel:"shelf",color:"#d4c29f"},{type:"laundryBasket",name:"Woven laundry basket",cat:"Decor",w:.47,d:.38,h:.4,kind:"basket",roomModel:"basket",color:"#c3a4ad"}],Ee=Object.fromEntries(ic.map(i=>[i.type,i])),By=0,No=()=>`item-${Date.now().toString(36)}-${++By}`;function tu(i,t,e,n=0,s={}){let r=Ee[i];return{id:No(),type:i,x:t,z:e,rot:n,w:r.w,d:r.d,h:r.h,color:r.color,...s}}var Ms=[{id:"my-little-house",name:"My little house",subtitle:"Your supplied room",image:"assets/default-layout.svg",description:"A work nook, queen bed & attached bathroom."},{id:"video-room",name:"My room \xB7 video model",subtitle:"From your video \xB7 estimated scale",image:"assets/video-room.svg",description:"Warm timber, navy curtains & the green loft frame."}];function eu(i){if(i==="my-little-house")return Gi(ki);if(i==="video-room")return Gi(Of);throw new Error("Unknown room layout.")}var zn=[];function en(i,t,e,n){zn.push({x:i,z:t,w:e,d:n,rot:0})}en(-1.625,2.3,1.25,.15);en(1.625,2.3,1.25,.15);en((-2.25+1.25)/2,-2.3,3.5,.15);en(2.15,-2.3,.2,.15);en(2.175,0,.15,4.75);en(-2.175,(-2.375-.35)/2,.15,2.025);en(-2.175,(.45+2.375)/2,.15,1.925);en(-3.675,-.875,.15,3);en(-3,-2.3,1.5,.15);en(-3,.55,1.5,.15);en(-.5,-3.33,3.5,.07);en(2.15,-3.33,.2,.07);en(-2.21,-2.875,.07,1);en(2.21,-2.875,.07,1);en(.5,2.3,1,.045);var jh=[{name:"Front door",x:0,z:2.19,w:2,d:.75,rot:0},{name:"Rear door",x:1.65,z:-2.18,w:.8,d:.7,rot:0},{name:"Bathroom door",x:-2.16,z:.05,w:.85,d:.8,rot:0}],Fe=null;function sc(i){Fe=i,zn.length=0,jh.length=0;let t=r=>{let o=ae(i,r),a=o.axis==="x",{start:c,end:l,fixed:h}=o,u=i.openings.filter(d=>d.side===r&&d.kind==="door").map(d=>({a:Math.max(c,d.at-d.w/2),b:Math.min(l,d.at+d.w/2)})).filter(d=>d.b>d.a).sort((d,m)=>d.a-m.a),f=c;for(let d of[...u,{a:l,b:l}]){if(d.a-f>.01){let m=(f+d.a)/2;zn.push(a?{x:m,z:h,w:d.a-f,d:.15,rot:0}:{x:h,z:m,w:.15,d:d.a-f,rot:0})}f=Math.max(f,d.b)}for(let d of i.openings.filter(m=>m.side===r&&m.kind==="door"))jh.push({name:d.id,x:a?d.at:h,z:a?h:d.at,w:a?d.w:.72,d:a?.72:d.w,rot:0})};for(let r of Po(i))t(r.side);let e=i.openings.find(r=>r.id==="front-door"&&r.kind==="door"&&r.w>=1.3);if(e){let r=ae(i,e.side);zn.push(r.axis==="x"?{x:e.at+e.w/4,z:r.fixed,w:e.w/2,d:.05,rot:0}:{x:r.fixed,z:e.at+e.w/4,w:.05,d:e.w/2,rot:0})}let n=i.bounds,s=i.balcony.depth;if(i.balcony.enabled!==!1){zn.push({x:(n.left+n.right)/2-.52,z:n.back-s+.04,w:n.right-n.left-1.05,d:.07,rot:0});for(let r of[n.left,n.right])zn.push({x:r,z:n.back-s/2,w:.07,d:s,rot:0})}if(i.room?.kind==="video-bedroom"){let r=bs(i),o=tc(i);zn.push({x:(r.left+r.right)/2,z:(r.back+r.front)/2,w:r.right-r.left,d:r.front-r.back,rot:0},{...o,rot:0})}for(let r of i.partitions)zn.push({x:r.x,z:r.z,w:r.w,d:r.d,rot:r.rot||0})}function kn(i,t,e){let n=Math.cos(i.rot||0),s=Math.sin(i.rot||0);return{x:i.x+t*n+e*s,z:i.z-t*s+e*n}}function zy(i,t,e){let n=Math.cos(i.rot||0),s=Math.sin(i.rot||0),r=t-i.x,o=e-i.z;return{x:r*n-o*s,z:r*s+o*n}}function Kh(i,t,e=0){let n=[i.rot||0,(i.rot||0)+Math.PI/2,t.rot||0,(t.rot||0)+Math.PI/2],s=a=>[[-a.w/2,-a.d/2],[a.w/2,-a.d/2],[a.w/2,a.d/2],[-a.w/2,a.d/2]].map(c=>kn(a,...c)),r=s(i),o=s(t);return n.every(a=>{let c=Math.cos(a),l=-Math.sin(a),h=r.map(f=>f.x*c+f.z*l),u=o.map(f=>f.x*c+f.z*l);return Math.max(...h)+e>Math.min(...u)+.008&&Math.max(...u)+e>Math.min(...h)+.008})}function nc(i,t=!1,e=1.7){let n=Ee[i.type]?.kind;if(!n||n==="rug")return[];if(n==="loft"){let s=i.w/Ee[i.type].w,r=i.d/Ee[i.type].d,a=[[-i.w/2+.045*s,-i.d/2+.045*r],[i.w/2-.045*s,-i.d/2+.045*r],[-i.w/2+.045*s,i.d/2-.045*r],[i.w/2-.045*s,i.d/2-.045*r]].map(([c,l])=>({...kn(i,c,l),w:.09*s,d:.09*r,rot:i.rot}));return a.push({...kn(i,i.w/2-.23*s,i.d/2+.2*r),w:.42*s,d:.46*r,rot:i.rot}),t&&e>i.h*(1.53/2.25)&&a.push({...i}),a}if(n==="sofabed"&&i.open){let s=i.d/Ee[i.type].d;return[{...i,...kn(i,0,.52*s),d:i.d+1.04*s}]}return t&&n==="shower"?[]:[i]}function rc(i,t){let e=[],n=nc(i);return n.some(s=>zn.some(r=>Kh(s,r)))&&e.push("Overlaps a wall or balcony railing."),n.some(s=>t.some(r=>r.id!==i.id&&nc(r).some(o=>Kh(s,o))))&&e.push("Overlaps another object."),n.some(s=>jh.some(r=>Kh(s,r)))&&e.push("Occupies a door clearance zone."),Ee[i.type].kind==="loft"&&e.push(`Loft: mattress about ${(i.h*1.88/2.25).toFixed(2)} m high. Check ceiling, guardrails & ladder.`),(Math.abs(i.x)>6||Math.abs(i.z)>6)&&e.push("Outside the illustrated garden area."),e}var nu=i=>.3*i/1.7;function Uo(i,t,e,n=.3){return e.some(s=>{let r=zy(s,i,t),o=Math.max(Math.abs(r.x)-s.w/2,0),a=Math.max(Math.abs(r.z)-s.d/2,0);return o*o+a*a<n*n})}function iu(i,t=1.7){return[...zn,...i.flatMap(e=>nc(e,!0,t))]}function We(i,t){if(Fe){let e=Fe.bounds,n=Fe.bathroom,s=Fe.balcony.depth;if(Fe.room?.kind==="video-bedroom"){let r=bs(Fe);if(i>=r.left&&i<=r.right&&t>=r.back&&t<=r.front)return Tt-Fe.room.stairDrop*(t-r.back)/(r.front-r.back)}return i>=e.left&&i<=e.right&&t>=e.back-(Fe.balcony.enabled===!1?0:s)&&t<=e.front||n.enabled!==!1&&i>=n.x-n.w/2&&i<=n.x+n.w/2&&t>=n.z-n.d/2&&t<=n.z+n.d/2?Tt:Math.abs(i-(e.left+e.right)/2)<1&&t>=e.front&&t<e.front+.825?Math.max(.02,Tt*(1-(t-e.front)/.825)):i>e.right-1.15&&i<e.right-.05&&t<e.back-s&&t>e.back-s-.825?Math.max(.02,Tt*(1-(e.back-s-t)/.825)):.025}return i>=-2.25&&i<=2.25&&t>=-3.375&&t<=2.375||i>=-3.75&&i<-2.25&&t>=-2.375&&t<=.625?Tt:Math.abs(i)<1.3&&t>=2.375&&t<3.2?Math.max(.02,Tt*(1-(t-2.375)/.825)):i>1.13&&i<2.16&&t<-3.375&&t>-4.2?Math.max(.02,Tt*(1-(-t-3.375)/.825)):.025}function ky(i,t){return Math.abs(We(i.x,i.z)-We(t.x,t.z))<.14}var Qh=class{constructor(){this.v=[]}push(t){let e=this.v,n=e.push(t)-1;for(;n;){let s=n-1>>1;if(e[s].f<=t.f)break;e[n]=e[s],n=s}e[n]=t}pop(){let t=this.v,e=t[0],n=t.pop();if(t.length){let s=0;for(;s*2+1<t.length;){let r=s*2+1;if(r+1<t.length&&t[r+1].f<t[r].f&&r++,t[r].f>=n.f)break;t[s]=t[r],s=r}t[s]=n}return e}};function oc(i,t,e,n=1.7){if(![i.x,i.z,t.x,t.z].every(x=>Number.isFinite(x)&&Math.abs(x)<=6))return null;let s=.1,r=-6,o=6,a=121,c=iu(e,n),l=nu(n),h=(x,C)=>Math.round((C-r)/s)*a+Math.round((x-r)/s),u=x=>({x:r+x%a*s,z:r+Math.floor(x/a)*s}),f=h(i.x,i.z),d=h(t.x,t.z);if(f<0||f>=a*a||d<0||d>=a*a||Uo(t.x,t.z,c,l))return null;let m=new Int8Array(a*a);m.fill(-1);function _(x){if(x<0||x>=a*a)return!1;if(m[x]<0){let C=u(x);m[x]=Uo(C.x,C.z,c,l)?1:0}return!m[x]}if(!_(f)||!_(d))return null;let g=new Float32Array(a*a);g.fill(1/0),g[f]=0;let p=new Int32Array(a*a);p.fill(-1);let v=new Uint8Array(a*a),b=new Qh;for(b.push({i:f,f:0});b.v.length;){let x=b.pop().i;if(v[x])continue;if(v[x]=1,x===d){let N=[t];for(let S=d;S!==f;S=p[S])N.push(u(S));return N.push(i),N.reverse()}let C=u(x),R=x%a,U=Math.floor(x/a);for(let[N,S]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let M=R+N,L=U+S;if(M<0||M>=a||L<0||L>=a)continue;let V=L*a+M;if(v[V]||!_(V)||N&&S&&(!_(U*a+M)||!_(L*a+R)))continue;let E=u(V);if(!ky(C,E))continue;let O=g[x]+Math.hypot(N,S);O>=g[V]||(g[V]=O,p[V]=x,b.push({i:V,f:O+Math.hypot(E.x-t.x,E.z-t.z)/s}))}}return null}function su(i,t){if(Fe){let e=Fe.bounds,n=Fe.bathroom;if(i==="bathroom")return n.enabled===!1?[]:[{x:n.x,z:n.z,pose:"stand",label:"In the bathroom"}];if(i==="balcony")return Fe.balcony.enabled===!1?[]:[{x:e.right-.6,z:e.back-Fe.balcony.depth/2,pose:"stand",label:"Taking a balcony break"}];if(i==="entrance"&&Fe.room?.kind==="video-bedroom"){let s=bs(Fe);return[{x:s.left-.45,z:s.back+.22,pose:"stand",label:"At the stair landing"}]}if(i==="entrance"){let s=Fe.openings.find(r=>r.kind==="door"&&r.side==="front")||Fe.openings.find(r=>r.id==="front-door");if(s){let r=ae(Fe,s.side),o={front:-1,back:1,left:1,right:-1}[s.side];return[{x:r.axis==="x"?s.at:r.fixed+o*.4,z:r.axis==="x"?r.fixed+o*.4:s.at,pose:"stand",label:"At the entrance"}]}return[]}}if(i==="bathroom")return[{x:-2.64,z:.05,pose:"stand",label:"In the bathroom"}];if(i==="balcony")return[{x:1.55,z:-2.88,pose:"stand",label:"Taking a balcony break"}];if(i==="entrance")return[{x:-.5,z:2.02,pose:"stand",label:"At the front door"}];if(i==="bed"){let e=t.find(s=>["bed","loft","sofabed"].includes(Ee[s.type].kind));if(!e)return[];if(Ee[e.type].kind==="loft")return[{...kn(e,e.w/2-.23*e.w/Ee[e.type].w,e.d/2+.83*e.d/Ee[e.type].d),pose:"sleep",item:e,label:"Climbing to bed"}];let n=nc(e)[0];return[[-n.w/2-.42,.15],[n.w/2+.42,.15],[0,n.d/2+.42]].map(s=>({...kn(n,...s),pose:"sleep",item:e,label:"Resting on the bed"}))}if(i==="desk"){let e=t.find(r=>["desk","gaming"].includes(Ee[r.type].kind));if(!e)return[];let s=t.filter(r=>Ee[r.type].kind==="chair").sort((r,o)=>Math.hypot(r.x-e.x,r.z-e.z)-Math.hypot(o.x-e.x,o.z-e.z))[0];return s&&Math.hypot(s.x-e.x,s.z-e.z)<1.8?[[-.72,0],[.72,0],[0,.72],[0,-.72]].map(r=>({...kn(s,...r),pose:"sit",item:s,label:"Working at the desk"})):[{...kn(e,0,e.d/2+.45),pose:"stand",label:"At the desk (add a chair to sit)"}]}return[]}function Gi(i){if(!i||i.format!=="house-studio-3d"||i.version!==1||!Array.isArray(i.items)||i.items.length>180)throw new Error("Not a supported House Studio layout (maximum 180 items).");let t=new Set,e=i.items.map(s=>{if(!s||!Ee[s.type]||typeof s.id!="string"||s.id.length>100||t.has(s.id))throw new Error("Invalid or duplicate furniture ID.");t.add(s.id);for(let r of["x","z","rot","w","d","h"])if(typeof s[r]!="number"||!Number.isFinite(s[r]))throw new Error("Furniture dimensions must be finite numbers.");if(Math.abs(s.x)>6||Math.abs(s.z)>6||s.w<.1||s.w>4||s.d<.1||s.d>4||s.h<.01||s.h>3||Math.abs(s.rot)>100)throw new Error("Furniture dimensions or positions are outside the supported range.");if(!/^#[0-9a-f]{6}$/i.test(s.color))throw new Error("Invalid furniture colour.");return{id:s.id,type:s.type,x:s.x,z:s.z,rot:s.rot,w:s.w,d:s.d,h:s.h,color:s.color,open:!!s.open}}),n;if(i.structure!==void 0){let s=i.structure;if(!s||typeof s!="object"||!s.bounds||!s.bathroom||!s.balcony||!s.colors||!Array.isArray(s.openings)||!Array.isArray(s.partitions)||s.openings.length>40||s.partitions.length>30)throw new Error("Invalid structural layout.");for(let[c,l]of[[s.bounds,["left","right","back","front"]],[s.bathroom,["x","z","w","d"]],[s.balcony,["depth"]]])for(let h of l)if(!Number.isFinite(c[h])||Math.abs(c[h])>6)throw new Error("Invalid structural dimensions.");if(s.bounds.right-s.bounds.left<2||s.bounds.front-s.bounds.back<2||s.bathroom.w<.8||s.bathroom.d<.8||s.balcony.depth<.5||s.balcony.depth>3)throw new Error("Structural dimensions are too small or out of range.");let r=["wall","floor","foundation","bathWall","bathFloor","roof","bathRoof","balcony","rail","door","window","frame","trim","garden"];for(let c of r)if(!/^#[0-9a-f]{6}$/i.test(s.colors[c]||""))throw new Error("Invalid structural color.");let o=new Set;for(let c of s.openings){if(!c||typeof c.id!="string"||c.id.length>60||o.has(c.id)||!["door","window"].includes(c.kind)||!["front","back","left","right","bath-front","bath-back","bath-left","bath-right"].includes(c.side)||!["at","w","h","sill"].every(l=>Number.isFinite(c[l]))||Math.abs(c.at)>6||c.w<.4||c.w>3||c.h<.3||c.h>2.7||c.sill<0||c.sill+c.h>3)throw new Error("Invalid door or window.");o.add(c.id)}for(let c of s.partitions){if(!c||typeof c.id!="string"||c.id.length>60||o.has(c.id)||!["x","z","w","d","h","rot"].every(l=>Number.isFinite(c[l]))||Math.abs(c.x)>6||Math.abs(c.z)>6||c.w<.1||c.d<.1||c.h<.3||c.h>3||c.w>6||c.d>6||!/^#[0-9a-f]{6}$/i.test(c.color))throw new Error("Invalid partition.");o.add(c.id)}for(let[c,l]of Object.entries(s.colors))if(!/^#[0-9a-f]{6}$/i.test(l))throw new Error("Invalid structural color.");if(s.bathroom.side!==void 0&&(!Re.includes(s.bathroom.side)||!["start","end","depth"].every(c=>Number.isFinite(s.bathroom[c]))||s.bathroom.end-s.bathroom.start<.8||s.bathroom.depth<.8||s.bathroom.depth>4))throw new Error("Invalid bathroom attachment.");if(s.wallSplits!==void 0){if(!s.wallSplits||typeof s.wallSplits!="object"||Array.isArray(s.wallSplits))throw new Error("Invalid wall splits.");for(let[c,l]of Object.entries(s.wallSplits))if(!Re.includes(c)||!Array.isArray(l)||l.length>12||l.some(h=>!Number.isFinite(h)||Math.abs(h)>6))throw new Error("Invalid wall splits.")}if(s.segmentColors!==void 0){if(!s.segmentColors||typeof s.segmentColors!="object"||Array.isArray(s.segmentColors))throw new Error("Invalid segment colors.");for(let[c,l]of Object.entries(s.segmentColors))if(!/^segment-(front|back|left|right)-\d{1,2}$/.test(c)||!/^#[0-9a-f]{6}$/i.test(l))throw new Error("Invalid wall section color.")}if(s.finishes!==void 0){if(!s.finishes||typeof s.finishes!="object"||Array.isArray(s.finishes))throw new Error("Invalid floor finishes.");for(let[c,l]of Object.entries(s.finishes))if(!["floor","bathFloor"].includes(c)||!l||!gi.some(h=>h.id===l.material)||!Number.isFinite(l.scale)||l.scale<.15||l.scale>3||!Number.isFinite(l.rotation)||Math.abs(l.rotation)>360)throw new Error("Invalid floor finish.")}if(s.wallVisibility!==void 0){if(!s.wallVisibility||typeof s.wallVisibility!="object"||Array.isArray(s.wallVisibility))throw new Error("Invalid wall visibility.");for(let[c,l]of Object.entries(s.wallVisibility))if(![...Bn,...s.partitions.map(h=>h.id)].includes(c)||!["full","low","hidden"].includes(l))throw new Error("Invalid wall visibility.")}for(let c of[s.bathroom,s.balcony])if(c.enabled!==void 0&&typeof c.enabled!="boolean")throw new Error("Invalid room component visibility.");if(s.room!==void 0){let c=s.room,l=s.bounds.right-s.bounds.left,h=s.bounds.front-s.bounds.back;if(!c||c.kind!=="video-bedroom"||typeof c.estimated!="boolean"||!["height","stairWidth","stairRun","stairDrop","ladderRun"].every(u=>Number.isFinite(c[u]))||c.height<2||c.height>3||c.stairWidth<.6||c.stairWidth>Math.min(2,l-.8)||c.stairRun<.8||c.stairRun>h-.8||c.stairDrop<.6||c.stairDrop>3||c.ladderRun<.5||c.ladderRun>1.5)throw new Error("Check the room height and stair/ladder dimensions.")}if(s.room&&s.openings.some(c=>c.sill+c.h>s.room.height+.001))throw new Error("Lower the existing window or door opening before reducing the ceiling below it.");n=Lo(s);let a=n.bathroom;if(Math.max(Math.abs(a.x-a.w/2),Math.abs(a.x+a.w/2),Math.abs(a.z-a.d/2),Math.abs(a.z+a.d/2))>6)throw new Error("The attached bathroom must stay within the 12 m planning area.");if(Object.values(n.wallSplits).some(c=>c.length>12))throw new Error("Maximum 12 split points per exterior wall.")}return{format:"house-studio-3d",version:1,name:typeof i.name=="string"?i.name.slice(0,60):"Imported layout",preset:Ms.some(s=>s.id===i.preset)?i.preset:"custom",items:e,...n?{structure:n}:{}}}var Fo=new I;function Sn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Fo.copy(t),Fo[n]=0,Fo.normalize();let l=.5*o/(o+a),h=1-Fo.angleTo(i)/c;return Math.sign(Fo[e])===1?h*l:a/(o+a)+l+l*(1-h)}var ac=class i extends Kn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,_=new I,g=.5/o;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:_.set(1,0,0),d[v+0]=Sn(_,l,"z","y",r,n),d[v+1]=1-Sn(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),d[v+0]=1-Sn(_,l,"z","y",r,n),d[v+1]=1-Sn(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),d[v+0]=1-Sn(_,l,"x","z",r,t),d[v+1]=Sn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),d[v+0]=1-Sn(_,l,"x","z",r,t),d[v+1]=1-Sn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),d[v+0]=1-Sn(_,l,"x","y",r,t),d[v+1]=1-Sn(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),d[v+0]=Sn(_,l,"x","y",r,t),d[v+1]=1-Sn(_,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function kf(i,t,e,n){let{box:s,cylinder:r,rod:o,mat:a}=n,c=e.w,l=e.d,h=e.h,u=t.color,f="#854d2d",d="#282c26",m=(_,g,p,v,b,x,C,R=0)=>s(i,_,g,p,v,b,x,C,R);if(e.roomModel==="bed"){for(let v of[-c/2+.055,c/2-.055])for(let b of[-l/2+.055,l/2-.055])m(.1,b<0?h:.8,.1,v,(b<0?h:.8)/2,b,f,.012);for(let[v,b]of[[-l/2+.04,h-.06],[l/2-.04,.76]]){m(c,.1,.08,0,b,v,f,.014),m(c-.1,.09,.07,0,.33,v,f,.009);for(let x=-c/2+.17;x<c/2-.1;x+=.13)m(.038,b-.42,.035,x,(b+.36)/2,v,f,.008)}for(let v of[-c/2+.035,c/2-.035])m(.065,.18,l-.1,v,.34,0,f,.012);m(c-.09,.22,l-.15,0,.46,0,u,.048);for(let v=0;v<12;v++)for(let b=0;b<9;b++){let x=-c/2+.14+b*(c-.28)/8,C=-l/2+.14+v*(l-.28)/11;r(i,.018,.018,.002,x,.572,C,"#d7e0e8",8)}for(let v of[-c*.23,c*.23])m(c*.4,.12,.43,v,.61,-l/2+.35,"#e8e4db",.05);let _=new on(c*.8,l*.65,14,18),g=_.attributes.position;for(let v=0;v<g.count;v++){let b=g.getX(v),x=g.getY(v);g.setZ(v,.016+Math.sin(b*16+x*7)*.016+Math.sin(x*11)*.018)}_.computeVertexNormals();let p=new oe(_,new $e({color:new Gt(u).lerp(new Gt("#d4eaf1"),.7),roughness:1,side:Pe}));p.rotation.x=-Math.PI/2,p.position.set(.07,.582,.2),p.receiveShadow=!0,i.add(p)}else if(e.roomModel==="desk"){for(let _ of[-c/2+.05,c/2-.05])for(let g of[-l/2+.05,l/2-.05])m(.055,h-.06,.055,_,(h-.06)/2,g,u,.006);m(c,.065,l,0,h-.03,0,u,.012),m(c-.1,.13,.03,0,h-.13,-l/2+.06,u);for(let[_,g,p,v]of[[.16,.05,"#e5dfd5",3],[-.08,-.08,"#45565a",3],[.31,-.07,"#b5d2e0",2]])for(let b=0;b<v;b++)m(.25,.027,.21,_+b%2*.015,h+.014+b*.027,g,p,.012);for(let[_,g,p,v]of[[-.37,.027,.17,"#e8ded4"],[-.29,.022,.12,"#d8d4a4"],[-.2,.024,.1,"#3a4b45"]])r(i,g,g,p,_,h+p/2,-.17,v,10),r(i,g*.55,g*.55,.02,_,h+p+.01,-.17,"#d5bd57",8)}else if(e.roomModel==="chair"){m(c-.04,.035,l-.07,0,.43,0,u,.015);for(let _ of[-c/2+.035,c/2-.035])for(let g of[-l/2+.035,l/2-.035])o(i,[_,0,g],[_*.83,.44,g*.82],.013,u);for(let _ of[-c/2+.025,c/2-.025])o(i,[_,.4,-l/2+.05],[_,.91,-l/2-.025],.015,u);m(c-.02,.026,.025,0,.91,-l/2-.025,u,.008);for(let _=-c/2+.045;_<c/2-.02;_+=.04)o(i,[_,.47,-l/2+.035],[_,.89,-l/2-.025],.0045,u);for(let _=.49;_<.9;_+=.045)m(c-.04,.007,.009,0,_,-l/2+.035-(_-.47)*.14,u)}else if(e.roomModel==="wardrobe"){m(c,h,l,0,h/2,0,u,.012);for(let _ of[-c*.246,c*.246])m(c*.48,h-.23,.035,_,h/2+.025,l/2+.008,new Gt(u).multiplyScalar(1.03).getStyle(),.006),m(.016,.24,.035,_+(_<0?.19:-.19),h*.52,l/2+.045,d,.006);for(let _=-c/2+.03;_<c/2;_+=.045)m(.002,h-.26,.003,_,h/2+.02,l/2+.029,"#915b31");for(let _ of[.13,.27])m(c-.08,.12,.025,0,_,l/2+.025,u,.004),m(.22,.014,.035,0,_+.02,l/2+.05,"#b9b9ae",.006);for(let[_,g]of[[-.32,"#252c30"],[-.12,"#bcb8ac"]]){m(.24,.47,.055,_,1.21,l/2+.12,g,.035);let p=m(.09,.36,.055,_-.16,1.29,l/2+.12,g,.02);p.rotation.z=-.22}}else if(e.roomModel==="shelf"){let _="#e3decb";for(let p of[-c/2+.025,c/2-.025])o(i,[p,0,l/2-.015],[p,h,-l/2+.03],.021,_),o(i,[p,0,-l/2+.03],[p,h,-l/2+.03],.021,_);let g=["#4b615b","#b9aa83","#c7b8a1","#525879","#9c7652","#d6d4c8"];for(let p=0;p<5;p++){let v=.08+p*(h-.13)/4,b=l*(1-p*.08);if(m(c,.025,b,0,v,-l/2+b/2,u,.006),(p===0||p===1)&&(m(c*.35,.18,b*.7,-c*.2,v+.105,-.015,"#c2b294",.008),m(c*.35,.018,.025,-c*.2,v+.18,b*.35,"#aa926c")),p===2||p===3)for(let x=0;x<Math.max(2,Math.floor(c*13));x++){let C=-c/2+.07+x*.055;if(C>c/2-.04)break;m(.038,.12+x%3*.025,b*.65,C,v+.08,-.015,g[(x+p)%6],.003)}p===4&&(r(i,.035,.035,.12,-c*.25,v+.072,-.01,"#9fbd66",10),m(.08,.09,.065,c*.2,v+.055,0,"#dccb9f",.014),r(i,.024,.024,.032,c*.2,v+.115,0,"#bd684c",8))}}else if(e.roomModel==="basket"){m(c,.035,l,0,.025,0,u,.016);for(let _ of[-c/2,c/2]){m(.025,.035,l,_,h-.025,0,u,.008);for(let g=-l/2+.035;g<l/2;g+=.045)m(.018,h-.06,.018,_,h/2,g,u,.005);for(let g=.08;g<h;g+=.05)m(.022,.015,l,_,g,0,u,.004)}for(let _ of[-l/2,l/2]){m(c,.035,.025,0,h-.025,_,u,.008);for(let g=-c/2+.035;g<c/2;g+=.045)m(.018,h-.06,.018,g,h/2,_,u,.005);for(let g=.08;g<h;g+=.05)m(c,.015,.022,0,g,_,u,.004)}}}var ru=new Map,ou=new Map;function Vn(i,t=.75,e=0){let n=`${i}:${t}:${e}`;if(!ru.has(n)){let s=new $e({color:i,roughness:t,metalness:e});s.userData.shared=!0,ru.set(n,s)}return ru.get(n)}var Ss=new $e({color:"#9dbab6",transparent:!0,opacity:.27,roughness:.15,metalness:.2,depthWrite:!1,side:Pe});Ss.userData.shared=!0;function wt(i,t,e,n,s,r,o,a="#fff",c=0){let l=`${t.toFixed(4)},${e.toFixed(4)},${n.toFixed(4)},${c}`;if(!ou.has(l)){let u=c?new ac(t,e,n,2,Math.min(c,t/3,e/3,n/3)):new Kn(t,e,n);u.userData.shared=!0,ou.set(l,u)}let h=new oe(ou.get(l),typeof a=="string"?Vn(a):a);return h.position.set(s,r,o),h.castShadow=!0,h.receiveShadow=!0,i.add(h),h}function De(i,t,e,n,s,r,o,a,c=16){let l=new oe(new no(t,e,n,c),typeof a=="string"?Vn(a):a);return l.position.set(s,r,o),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function au(i,t,e,n,s,r,o=[1,1,1]){let a=new oe(new cs(t,1),Vn(r));return a.position.set(e,n,s),a.scale.set(...o),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function _i(i,t,e,n,s){let r=new I(...t),o=new I(...e),a=De(i,n,n,r.distanceTo(o),0,0,0,s,8);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new I(0,1,0),o.sub(r).normalize()),a}function lc(i,t,e,n,s="#b59a72",r=.05){for(let o of[-t/2+.055,t/2-.055])for(let a of[-e/2+.055,e/2-.055])wt(i,r,n,r,o,n/2,a,s,.009)}function lu(i){let t=Ee[i.type],e=t.kind,n=new Lt,s=t.w,r=t.d,o=t.h,a=i.color,c="#bda17a",l="#37433f",h="#ecebdc";if(n.userData.itemId=i.id,t.roomModel)kf(n,i,t,{box:wt,cylinder:De,rod:_i,mat:Vn});else if(e==="bed"||e==="loft"){let u=e==="loft",f=u?1.88:.55,d=f-.25;if(u){for(let _ of[-s/2+.045,s/2-.045])for(let g of[-r/2+.045,r/2-.045])wt(n,.09,2.25,.09,_,1.125,g,a,.008);wt(n,s,.09,.07,0,2.2,-r/2,a);for(let _ of[-s/2,s/2])wt(n,.065,.07,r,_,2.2,0,a),wt(n,.04,.07,r,_,2.04,0,a);wt(n,s-.44,.07,.07,-.22,2.2,r/2,a);for(let _=.16;_<1.9;_+=.25)wt(n,.34,.04,.08,s/2-.23,_,r/2+.19,a);for(let _ of[s/2-.41,s/2-.05])_i(n,[_,.02,r/2+.4],[_,1.94,r/2+.02],.025,a)}else lc(n,s,r,.22,c,.075),wt(n,s,o,.085,0,o/2,-r/2+.03,c,.03),wt(n,s-.1,.35,.05,0,o-.22,-r/2+.081,a,.05);wt(n,s,.16,r,0,d-.02,0,c,.035),wt(n,s-.1,.22,r-.12,0,f-.11,.01,h,.065),wt(n,s-.13,.042,r*.6,0,f+.014,r*.13,a,.025),wt(n,s-.13,.028,.24,0,f+.034,r*.09,new $e({color:a,roughness:1}),.015);let m=s>1.4?2:1;for(let _=0;_<m;_++)wt(n,(s-.23)/m,.11,.39,(_-(m-1)/2)*(s-.12)/m,f+.045,-r/2+.34,"#f5f3e8",.055);if(!u)for(let _ of[-s*.24,s*.24])wt(n,s*.42,.15,.018,_,.275,r/2+.006,c,.015),wt(n,.11,.012,.012,_,.3,r/2+.02,l)}else if(e==="sofa"||e==="sofabed"||e==="outdoor"){let u=e==="outdoor";lc(n,s,r,.19,l,.045),wt(n,s-.03,.2,r,0,.27,0,u?c:a,.055),wt(n,s,.49,.15,0,.57,-r/2+.075,a,.06);for(let f of[-s/2+.075,s/2-.075])wt(n,.15,.38,r,f,.45,0,a,.04);for(let f of[-s*.22,s*.22])wt(n,s*.42,.13,r-.23,f,.42,.045,u?"#d9d7c4":a,.055);if(!u)for(let f of[-s*.22,s*.22]){let d=wt(n,s*.38,.3,.14,f,.63,-r/2+.19,a,.055);d.rotation.x=-.12}if(e==="sofabed"&&i.open){for(let f of[-s/2+.09,s/2-.09])wt(n,.045,.21,.045,f,.105,r/2+.96,l);wt(n,s-.14,.28,1.04,0,.29,r/2+.52,a,.05),wt(n,s-.19,.03,1,0,.443,r/2+.5,"#e7e4d7",.02)}}else if(["desk","gaming","table","coffee","stool","outdoor"].includes(e)){let u=e==="gaming";if(lc(n,s,r,o-.055,u?l:c,u?.055:.045),wt(n,s,.06,r,0,o-.03,0,a,.015),e==="desk"||u){wt(n,.23,.014,.16,0,o+.014,-r*.12,l,.005),wt(n,.04,.19,.04,0,o+.105,-r*.21,l),wt(n,.58,.35,.025,0,o+.32,-r*.23,l,.008);let f=new $e({color:u?"#315251":"#829f99",emissive:u?"#407787":"#51786c",emissiveIntensity:.3,roughness:.3});wt(n,.546,.313,.005,0,o+.32,-r*.23+.017,f,.003),wt(n,.38,.015,.13,-.06,o+.014,.11,"#454e49",.008);for(let d=0;d<8;d++)wt(n,.032,.004,.08,-.21+d*.043,o+.024,.1,"#bac7bb",.003);if(wt(n,.06,.025,.09,.23,o+.02,.13,l,.012),u){wt(n,.2,.45,.43,s/2-.2,.29,-.04,l,.018);for(let d of[.2,.37]){let m=De(n,.064,.064,.01,s/2-.2,d,.185,"#66bdbc");m.rotation.x=Math.PI/2}}else De(n,.036,.03,.085,-s/2+.14,o+.044,.07,"#e5e7df")}}else if(e==="chair"){De(n,.035,.035,.35,0,.2,0,l);for(let u=0;u<5;u++){let f=u*Math.PI*2/5;_i(n,[0,.09,0],[Math.sin(f)*.25,.065,Math.cos(f)*.25],.018,l),au(n,.033,Math.sin(f)*.25,.04,Math.cos(f)*.25,l)}wt(n,.46,.085,.45,0,.47,0,a,.055),wt(n,.46,.52,.065,0,.77,-.2,a,.045);for(let u of[-.25,.25])wt(n,.028,.18,.03,u,.53,0,l),wt(n,.06,.035,.25,u,.63,.01,l,.012)}else if(["wardrobe","shelf","cabinet","nightstand","tv","pantry","basin"].includes(e)){let u=e==="tv"?.48:e==="pantry"?.83:e==="basin"?.66:o,f=e==="shelf";lc(n,s,r,.1,l,.035),wt(n,s,.045,r,0,.11,0,a,.008),wt(n,s,.045,r,0,u-.02,0,a,.008);for(let d of[-s/2+.017,s/2-.017])wt(n,.035,u-.14,r,d,u/2+.03,0,a,.005);if(wt(n,s-.03,u-.1,.025,0,u/2+.025,-r/2+.012,a),f)for(let d=.45;d<u-.1;d+=.39){wt(n,s-.05,.027,r,0,d,0,a);for(let m=0;m<5;m++)wt(n,.055,.18+m%3*.045,.16,-s*.32+m*.073,d+.1+m%3*.022,0,["#879d8c","#d6c7a7","#b4bbb2","#dedbd0","#657b79"][m])}else{let d=s>.8?2:1;for(let m=0;m<d;m++){let _=(m-(d-1)/2)*(s/d);wt(n,s/d-.027,u-.17,.025,_,u/2+.02,r/2-.012,a,.008),wt(n,.013,e==="wardrobe"?.38:.08,.018,_+s/d*.31,u/2+.05,r/2+.01,l,.004)}}if(e==="tv"&&(wt(n,.32,.02,.17,0,.5,0,l),wt(n,.045,.13,.04,0,.56,0,l),wt(n,1.07,.6,.045,0,.91,0,l,.012),wt(n,1.01,.54,.007,0,.91,.028,"#4a6664",.009)),e==="pantry"||e==="basin"){wt(n,s+.03,.05,r+.02,0,u+.02,0,"#f1efe5",.013);let d=e==="basin"?s-.12:.39,m=e==="basin"?0:-s*.22;if(wt(n,d,.045,r-.12,m,u+.05,0,"#748d88",.018),wt(n,d-.055,.008,r-.17,m,u+.075,0,"#bbd1c9",.015),_i(n,[m,u+.07,-r*.28],[m,u+.24,-r*.28],.015,l),_i(n,[m,u+.24,-r*.28],[m,u+.24,-r*.08],.015,l),e==="pantry"){wt(n,.39,.018,r-.13,s*.26,u+.058,0,l,.01);for(let _ of[-.1,.1])De(n,.07,.07,.003,s*.26,u+.069,_,"#63756d")}}}else if(e==="fridge")wt(n,s,o,r,0,o/2,0,a,.035),wt(n,s-.028,o*.72,.035,0,o*.39,r/2,a,.014),wt(n,s-.028,o*.23,.035,0,o*.89,r/2,a,.014),wt(n,.015,.2,.023,-s*.36,o*.61,r/2+.028,l,.005);else if(e==="toilet"){wt(n,.34,.5,.17,0,.45,-r/2+.075,a,.035),wt(n,.34,.055,.19,0,.73,-r/2+.075,"#f5f4f0",.015);let u=au(n,.23,0,.34,.075,a,[.82,.47,1.14]);De(n,.1,.13,.27,0,.16,.01,a);let f=new oe(new po(.145,.031,7,24),Vn("#f4f3ed"));f.rotation.x=Math.PI/2,f.scale.y=1.3,f.position.set(0,.435,.076),n.add(f),wt(n,.035,.008,.06,.09,.762,-r/2+.07,"#a4b0ab",.003)}else if(e==="shower"){wt(n,s,.035,r,0,.019,0,"#d5dcd4",.008),wt(n,.09,.003,.09,0,.04,0,l),wt(n,.018,o,r,-s/2,.035+o/2,0,Ss),wt(n,.018,o,r,s/2,.035+o/2,0,Ss),wt(n,s*.46,o,.018,-s*.27,.035+o/2,r/2,Ss);for(let u of[-s/2,s/2])wt(n,.022,o,.022,u,o/2,r/2,l);_i(n,[s*.23,1.1,-r/2+.04],[s*.23,2.03,-r/2+.04],.013,l),_i(n,[s*.23,2.03,-r/2+.04],[s*.23,2.03,-r/2+.23],.013,l),De(n,.1,.1,.018,s*.23,2.01,-r/2+.23,l),wt(n,.16,.025,.05,s*.23,1.07,-r/2+.08,l,.01)}else if(e==="plant"){De(n,s*.34,s*.27,o*.28,0,o*.14,0,a),De(n,s*.29,s*.29,.02,0,o*.283,0,"#5b5742"),_i(n,[0,o*.28,0],[.02,o*.84,0],.009,"#786c42");for(let u=0;u<9;u++){let f=u*2.4,d=o*(.36+u*.06);_i(n,[0,d-.04,0],[Math.sin(f)*s*.28,d+.08,Math.cos(f)*s*.28],.007,"#7a8957");let m=au(n,s*.25,Math.sin(f)*s*.33,d+.085,Math.cos(f)*s*.33,["#507454","#6f8b59","#869b69"][u%3],[.65,.45,1.6]);m.rotation.y=-f}}else if(e==="rug"){wt(n,s,.012,r,0,.01,0,a,.004);for(let u of[-r/2+.07,r/2-.07])wt(n,s-.05,.002,.025,0,.017,u,"#ebe6d2");for(let u=0;u<30;u++)wt(n,.002,.001,r-.04,-s/2+.02+u*(s-.04)/29,.017,0,"#d8d3be")}else e==="lamp"&&(De(n,.14,.15,.035,0,.02,0,l),De(n,.014,.014,o-.2,0,(o-.2)/2,0,l),De(n,.11,.17,.27,0,o-.16,0,a),De(n,.15,.15,.009,0,o-.295,0,"#fff3cc"));return n.scale.set(i.w/s,i.h/o,i.d/r),n.position.set(i.x,We(i.x,i.z)+.015,i.z),n.rotation.y=i.rot,n}function Vf(i){let t=new Lt,e=new Lt;t.add(e),i.add(t);let n=wt(e,.24,.28,.24,0,1.56,0,"#d9b999",.013),s=wt(e,.35,.57,.23,0,1.12,0,"#e0a76b",.014),r=[],o=[];for(let a of[-1,1]){let c=new Lt;c.position.set(a*.235,1.37,0),wt(c,.12,.56,.16,0,-.265,0,"#d9b999",.012),e.add(c),r.push(c);let l=new Lt;l.position.set(a*.1,.835,0),wt(l,.16,.835,.19,0,-.4175,0,"#405b55",.012),e.add(l),o.push(l)}return t.position.set(0,Tt+.015,1.4),{root:t,body:e,head:n,torso:s,arms:r,legs:o,reset(){e.rotation.set(0,0,0),e.position.set(0,0,0);for(let a of[...r,...o])a.rotation.set(0,0,0)}}}function cu(i){i.traverse(t=>{t.geometry&&!t.geometry.userData.shared&&t.geometry.dispose(),t.material&&!t.material.userData.shared&&t.material.dispose()})}var Hf={house:"m3 10 9-7 9 7v11H3Z M9 21v-8h6v8",orbit:"M21 12a9 9 0 1 1-9-9 M15 3h6v6 M7 12h10 M12 7v10",chair:"M6 12V4h12v8 M4 12h16v5H4Z M6 17v4 M18 17v4",person:"M10 3h4v4h-4z M8 10h8v6H8z M5 10v6 M19 10v6 M9 16v6 M15 16v6",save:"M4 3h13l4 4v14H3V3Z M7 3v7h10V3 M7 21v-7h10v7",expand:"M8 3H3v5 M16 3h5v5 M21 16v5h-5 M3 16v5h5",collapse:"M3 8h5V3 M16 3v5h5 M21 16h-5v5 M8 21v-5H3",help:"M9 8a3 3 0 0 1 6 0c0 3-3 2-3 5 M12 17h.01 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",sun:"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M18 18l1 1 M5 19l1-1 M18 6l1-1",sunset:"M3 17h18 M4 21h16 M7 17a5 5 0 0 1 10 0 M12 3v6 M9 6l3 3 3-3 M3 10l2 2 M21 10l-2 2",moon:"M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z",arrow:"M4 12h16 M14 6l6 6-6 6",search:"M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0 M15 15l6 6",bed:"M3 18V7 M21 18V9 M3 14h18 M3 9h6v5 M9 9h12 M3 18v3 M21 18v3",monitor:"M3 4h18v13H3Z M12 17v4 M8 21h8",bath:"M3 12h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z M5 12V5a2 2 0 0 1 4 0 M6 20v2 M18 20v2",leaf:"M20 3C6 3 3 9 5 16s15 5 15-13Z M5 21l10-11",door:"M5 21V3h14v18 M2 21h20 M14 12h.1",route:"M6 6h10a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h10 M5 3h3v6H5Z M17 19h3v4h-3z",reset:"M3 10a9 9 0 1 1 2 9 M3 3v7h7",download:"M12 3v12 M7 10l5 5 5-5 M4 16v5h16v-5",upload:"M12 16V3 M7 8l5-5 5 5 M4 16v5h16v-5",roof:"m2 12 10-9 10 9 M5 11v10h14V11",walls:"M3 4h18v16H3Z M3 9h18 M3 15h18 M9 4v5 M15 9v6 M8 15v5",ruler:"m3 17 14-14 4 4L7 21Z M7 13l2 2 M11 9l2 2 M15 5l2 2",dimensions:"M4 7V3h16v4 M4 17v4h16v-4 M8 12h8 M4 10v4 M20 10v4",cube:"m12 3 9 5v9l-9 5-9-5V8Z M3 8l9 5 9-5 M12 13v9",plan:"M3 3h18v18H3Z M3 12h9V3 M12 21v-5",focus:"M3 8V3h5 M16 3h5v5 M21 16v5h-5 M8 21H3v-5 M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",undo:"M3 10h11a6 6 0 0 1 0 12 M8 5l-5 5 5 5",redo:"M21 10H10a6 6 0 0 0 0 12 M16 5l5 5-5 5",play:"m8 4 12 8-12 8Z",pause:"M7 4v16 M17 4v16",camera:"M3 7h4l2-3h6l2 3h4v14H3Z M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0",close:"M6 6l12 12 M18 6 6 18",copy:"M8 8h13v13H8Z M16 8V3H3v13h5",trash:"M3 6h18 M6 6l1 15h10l1-15 M9 6V3h6v3 M10 10v7 M14 10v7",rotate:"M3 10a9 9 0 1 1 2 9 M3 3v7h7",check:"m5 12 4 4 10-10"},xi=i=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${Hf[i]||Hf.cube}"/></svg>`;function Gf(i=document){i.querySelectorAll("[data-icon]").forEach(t=>{t.innerHTML=xi(t.dataset.icon)})}var hu=new Map;function Vy(i){return()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296)}function cc(i,t,e=19){let n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),c=o*o*(3-2*o),l=(f,d)=>((Math.imul(f+e,374761393)^Math.imul(d-e,668265263))>>>0)/4294967296,h=l(n,s)*(1-a)+l(n+1,s)*a,u=l(n,s+1)*(1-a)+l(n+1,s+1)*a;return h*(1-c)+u*c}function Wf(i,t){return cc(i/151,t/151)*.53+cc(i/68,t/68,71)*.27+cc(i/29,t/29,137)*.14+cc(i/11,t/11,251)*.06}function Xf(i){if(hu.has(i))return hu.get(i);let t=document.createElement("canvas"),e=512;t.width=t.height=e;let n=t.getContext("2d"),s=Vy(271+gi.findIndex(c=>c.id===i)*7919),r=(c,l=1)=>`rgba(${c},${c},${c},${l})`;n.fillStyle="#f7f7f7",n.fillRect(0,0,e,e);let o=n.getImageData(0,0,e,e);for(let c=0;c<e;c++)for(let l=0;l<e;l++){let h=Math.sin(l*.021+Math.sin(c*.013)*2)+Math.sin(c*.031-l*.014)+Math.cos((l+c)*.014),u=i==="marble"||i==="stone"?Wf(l,c):.5,f=i==="stone"?212+u*42:i==="concrete"?238+h*2:i==="marble"?234+u*24:246,d=i==="concrete"||i==="stone"?9:3,m=Math.max(0,Math.min(255,f+(s()-.5)*d)),_=(c*e+l)*4;o.data[_]=o.data[_+1]=o.data[_+2]=m,o.data[_+3]=255}if(n.putImageData(o,0,0),i==="marble"||i==="stone")for(let c=0;c<(i==="marble"?9:5);c++){let l=s()*e*1.8-e*.4,h=s()*7,u=s()*.9-.45,f=Array.from({length:65},(d,m)=>{let _=m*e/64;return[l+u*_+(Wf(_+h*101,h*79)-.5)*170+Math.sin(_*.07+h)*2,_]});for(let[d,m]of[[18,.018],[5,.065],[.7,.24]])n.beginPath(),f.forEach(([_,g],p)=>p?n.lineTo(_,g):n.moveTo(_,g)),n.strokeStyle=r(i==="marble"?116:150,m),n.lineWidth=d,n.stroke();if(c%2===0){let[d,m]=f[20];n.beginPath(),n.moveTo(d,m),n.bezierCurveTo(d-12,m+40,d-70,m+50,d-87,m+115),n.lineWidth=.6,n.strokeStyle=r(130,.18),n.stroke()}}let a=(c,l,h,u,f)=>{n.save(),n.beginPath(),n.rect(c,l,h,u),n.clip(),n.fillStyle=r(217+Math.floor(f*30)),n.fillRect(c,l,h,u);for(let d=0;d<32;d++){let m=l+d*u/30;n.beginPath();for(let _=0;_<=h;_+=8){let g=m+Math.sin(_*.025+f*8+d*.3)*u*.027;_?n.lineTo(c+_,g):n.moveTo(c+_,g)}n.strokeStyle=r(120,.05+d%4*.012),n.lineWidth=.45+d%3*.35,n.stroke()}n.strokeStyle=r(95,.24),n.lineWidth=1.8,n.strokeRect(c,l,h,u),n.restore()};if(i==="wood")for(let c=0;c<4;c++){let l=c%2?e*.38:0;for(let h=-1;h<2;h++)a(h*e+l,c*e/4,e,e/4,s())}if(i==="herringbone"){n.save(),n.translate(e/2,e/2),n.rotate(Math.PI/4);let c=e/8;for(let l=-12;l<12;l++)for(let h=-12;h<12;h++)((l-h)%6+6)%6===0&&a(l*c,h*c,3*c,c,s()),((l-h)%6+6)%6===3&&(n.save(),n.translate((l+1)*c,h*c),n.rotate(Math.PI/2),a(0,0,3*c,c,s()),n.restore());n.restore()}if(i==="terrazzo")for(let c=0;c<850;c++){let l=s()*e,h=s()*e,u=1.3+s()*5;n.beginPath();for(let f=0;f<5;f++){let d=f/5*Math.PI*2,m=u*(.5+s()*.5);f?n.lineTo(l+Math.cos(d)*m,h+Math.sin(d)*m):n.moveTo(l+Math.cos(d)*m,h+Math.sin(d)*m)}n.closePath(),n.fillStyle=r(125+Math.floor(s()*125),.45),n.fill()}return["marble","stone","tiles","matte"].includes(i)&&(n.strokeStyle=r(i==="tiles"?130:170,.45),n.lineWidth=i==="tiles"?5:2.3,n.strokeRect(0,0,e,e),n.strokeStyle="rgba(255,255,255,.45)",n.lineWidth=1,n.strokeRect(3,3,e-6,e-6)),hu.set(i,t),t}function hc(i,t,e,n,s=null){let r=gi.find(m=>m.id===i.material)||gi[0],o=new os(Xf(r.id));o.wrapS=o.wrapT=Zs,o.repeat.set(e/i.scale,n/i.scale),o.center.set(.5,.5),o.rotation=i.rotation*Math.PI/180,o.colorSpace=ke,o.anisotropy=4;let a=Math.cos(o.rotation),c=Math.sin(o.rotation),l=a*e/i.scale,h=-c*n/i.scale,u=c*e/i.scale,f=a*n/i.scale;if(o.matrixAutoUpdate=!1,o.matrix.set(l,h,.5-(l+h)/2,u,f,.5-(u+f)/2,0,0,1),s){let m=i.scale;o.matrix.set(a*e/m,c*n/m,(a*(s.x-e/2)-c*(s.z+n/2))/m,c*e/m,-a*n/m,(c*(s.x-e/2)+a*(s.z+n/2))/m,0,0,1)}let d=new $e({color:t,map:o,roughness:r.roughness,metalness:0});return d.userData.floorTexture=!0,d}function qf(i,t){let e=Xf(i),n=document.createElement("canvas");n.width=n.height=96;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,96,96),s.globalCompositeOperation="multiply";let r=["marble","stone","matte","tiles"].includes(i)?2:1;for(let o=0;o<r;o++)for(let a=0;a<r;a++)s.drawImage(e,a*96/r,o*96/r,96/r,96/r);return n.toDataURL()}function Yf(i,t){sc(t);let e=new Lt,n=new Lt,s=new Lt,r=new Lt,o=new Lt,a=new Lt,c=new Lt;i.add(e,n,s,r,o,a,c);let l=t.colors,h=t.bounds,u=t.room,f=u.height,d=bs(t),m=tc(t),_={},g={},p={},v=[],b=(A,F)=>(A.userData.structureId=F,A),x=(A,F,$,Mt,at,H,Z,st,ot,_t=0)=>b(wt(A,F,$,Mt,at,H,Z,st,_t),ot),C=(A,F,$,Mt,at,H)=>{let Z=new I(...F),st=new I(...$),ot=x(A,Mt,Z.distanceTo(st),Mt,0,0,0,at,H,.005);return ot.position.copy(Z).add(st).multiplyScalar(.5),ot.quaternion.setFromUnitVectors(new I(0,1,0),st.sub(Z).normalize()),ot};function R(A,F="floor",$="floor"){let Mt=A.right-A.left,at=A.front-A.back,H=(A.left+A.right)/2,Z=(A.back+A.front)/2;x(e,Mt,.14,at,H,Tt-.075,Z,l.foundation,$);let st=hc(t.finishes[F],l[F],Mt,at,{x:H,z:Z}),ot=b(new oe(new on(Mt,at),st),$);ot.rotation.x=-Math.PI/2,ot.position.set(H,Tt+.008,Z),ot.receiveShadow=!0,e.add(ot)}for(let A of Bf(t))R(A);if(t.bathroom.enabled!==!1){let A=t.bathroom;R({left:A.x-A.w/2,right:A.x+A.w/2,back:A.z-A.d/2,front:A.z+A.d/2},"bathFloor","bathroom"),x(r,A.w,.1,A.d,A.x,Tt+f+.05,A.z,l.bathRoof,"bath-roof")}function U(A,F,$,Mt,at,H){let Z=[F.start,F.end,...$.flatMap(ot=>[Math.max(F.start,ot.at-ot.w/2),Math.min(F.end,ot.at+ot.w/2)])].filter(ot=>ot>=F.start&&ot<=F.end).sort((ot,_t)=>ot-_t),st=F.axis==="x";for(let ot=1;ot<Z.length;ot++){let _t=Z[ot-1],zt=Z[ot],Kt=(_t+zt)/2;if(zt-_t<.003)continue;let D=$.find(tt=>Kt>tt.at-tt.w/2&&Kt<tt.at+tt.w/2),ct=D?[[0,Math.min(Mt,D.sill)],[D.sill+D.h,Mt]]:[[0,Mt]];for(let[tt,nt]of ct)if(!(nt<=tt)&&(x(A,st?zt-_t:.14,nt-tt,st?.14:zt-_t,st?Kt:F.fixed,Tt+(tt+nt)/2,st?F.fixed:Kt,H,at),F.side==="back"&&tt<1.1)){let it=Math.min(nt,1.1),xt=F.fixed+.082;x(A,zt-_t,it-tt,.024,Kt,Tt+(tt+it)/2,xt,l.panel,at);for(let dt=_t+.025;dt<zt-.01;dt+=.055)x(A,.006,it-tt,.006,dt,Tt+(tt+it)/2,xt+.014,"#30271f",at);it===1.1&&x(A,zt-_t,.045,.04,Kt,Tt+1.1,xt+.005,l.trim,at)}}}for(let A of Po(t)){let F=new Lt,$=new Lt;n.add(F),s.add($),_[A.side]={full:F,low:$};let Mt=t.openings.filter(H=>H.side===A.side),at=A.side.startsWith("bath-");for(let H of at?[{...A,id:A.side+"-wall"}]:Mn(t,A.side)){let Z=t.segmentColors[H.id]||(at?l.bathWall:t.colors[A.side+"Wall"]||l.wall);U(F,H,Mt,f,H.id,Z),U($,H,Mt,.64,H.id,Z)}}function N(A){let F=Po(t).find(at=>at.side===A.side);if(!F)return;let $=new Lt;$.position.set(F.axis==="x"?A.at:F.fixed,Tt+A.sill,F.axis==="x"?F.fixed:A.at),F.axis==="z"&&($.rotation.y=-Math.PI/2),b($,A.id),a.add($),g[A.id]=$;let Mt=A.color||l.frame;if(A.style!=="open"){for(let at of[-A.w/2,A.w/2])x($,.05,A.h,.09,at,A.h/2,0,Mt,A.id);for(let at of[0,A.h])x($,A.w+.05,.05,.09,0,at,0,Mt,A.id)}if(A.kind==="window"){x($,A.w-.07,A.h-.07,.018,0,A.h/2,0,new $e({color:A.style==="horizontal"?new Gt(l.window).multiplyScalar(.3):l.window,transparent:!0,opacity:A.style==="horizontal"?.9:.23,roughness:.4,side:Pe,depthWrite:!1}),A.id);let at=A.style==="horizontal"?4:2;for(let H=1;H<at;H++)x($,.024,A.h-.04,.055,-A.w/2+A.w*H/at,A.h/2,.015,Mt,A.id);if(A.style==="curtained"){x($,A.w,.024,.055,0,A.h*.48,.015,Mt,A.id);let H=A.sill+A.h-.18,Z=A.h+.15,st=F.side==="right"?.12:F.side==="left"?-.12:.12,ot=De($,.016,.016,A.w+.72,0,Z+.03,st,"#ad8e53",10);ot.rotation.z=Math.PI/2,b(ot,A.id);for(let _t of[-1,1])for(let zt=0;zt<7;zt++){let Kt=_t*(A.w/2+.035)+_t*zt*.042,D=.045+Math.sin(zt/6*Math.PI*3)*.022;x($,.053,H,.035,Kt,Z-H/2,st+D,l.curtain,A.id,.012);let ct=De($,.024,.024,.012,Kt,Z-.025,st+D,"#b6a16d",8);ct.rotation.x=Math.PI/2,b(ct,A.id)}}}else if(A.style!=="open"){let at=new Lt;at.position.x=-A.w/2+.04,$.add(at),x(at,A.w-.08,A.h-.06,.035,A.w/2-.04,A.h/2,0,l.door,A.id),p[A.id]=at}}for(let A of t.openings)N(A);for(let A of t.partitions){let F=new Lt,$=new Lt;n.add(F),s.add($),_[A.id]={full:F,low:$};for(let[Mt,at]of[[F,A.h],[$,Math.min(.64,A.h)]]){let H=x(Mt,A.w,at,A.d,A.x,Tt+at/2,A.z,A.color,A.id);H.rotation.y=A.rot||0}}let S=9,M=(d.front-d.back)/S,L=u.stairDrop/S,V=(d.left+d.right)/2;for(let A=0;A<S;A++){let F=Tt-A*L,$=d.back+(A+.5)*M;x(e,d.right-d.left-.07,.055,M+.025,V,F-.035,$,"#755031","stairwell",.004),x(e,d.right-d.left-.07,L,.035,V,F-L/2,d.back+(A+1)*M,"#62442d","stairwell")}for(let A of[d.left+.055,d.right-.055])C(e,[A,Tt-.12,d.back],[A,Tt-u.stairDrop-.12,d.front],.075,"#62442d","stairwell");C(e,[d.left+.035,Tt+.88,d.back],[d.left+.035,Tt-u.stairDrop+.88,d.front],.055,"#8a5734","stairwell");for(let A=0;A<=S;A+=2){let F=d.back+A*M,$=Tt-A*L;C(e,[d.left+.035,$,F],[d.left+.035,$+.86,F],.035,"#825332","stairwell")}x(e,.055,.92,.055,d.left+.035,Tt+.46,d.back,"#8a5734","stairwell");let E=m.z-m.d/2+.06,O=h.front-.12;for(let A of[m.x-.29,m.x+.29])C(e,[A,Tt+.02,E],[A,Tt+f+.04,O],.055,l.roof,"loft"),x(e,.055,.53,.055,A,Tt+f+.28,O,l.roof,"loft");for(let A=1;A<=8;A++){let F=A/9;x(e,.55,.035,.095,m.x,Tt+F*f,E+F*(O-E),l.roof,"loft",.004)}for(let[A,F]of[["back",h.back+.05],["front",h.front-.05]]){let $=x(e,h.right-h.left,.15,.1,(h.left+h.right)/2,Tt+f-.055,F,l.roof,"loft");$.userData.wallSide=A}for(let[A,F]of[["left",h.left+.05],["right",h.right-.05]]){let $=x(e,.1,.15,h.front-h.back,F,Tt+f-.055,(h.back+h.front)/2,l.roof,"loft");$.userData.wallSide=A}for(let A=h.left+.48;A<h.right-.1;A+=.48){let F=Math.abs(A-m.x)<.45,$=F?h.front-1.05:h.front;x(r,.065,.14,$-h.back,A,Tt+f-.055,(h.back+$)/2,l.roof,"loft")}let z=m.x-.43,B=m.x+.43,J=h.front-1.05;for(let A of[{left:h.left,right:h.right,back:h.back,front:J},{left:h.left,right:z,back:J,front:h.front},{left:B,right:h.right,back:J,front:h.front}])A.right>A.left&&x(r,A.right-A.left,.055,A.front-A.back,(A.left+A.right)/2,Tt+f+.04,(A.back+A.front)/2,"#e1e3da","loft");x(r,.07,.12,1.05,z,Tt+f-.02,h.front-.525,l.roof,"loft"),x(r,.07,.12,1.05,B,Tt+f-.02,h.front-.525,l.roof,"loft");let G=x(r,h.right-h.left,.06,h.front-h.back,(h.left+h.right)/2,Tt+f+1.15,(h.back+h.front)/2,"#e4e2dc","loft");G.rotation.z=-.1;let P=new Ni("#fff0ce",0,7,2);P.position.set(-.3,Tt+f-.25,-.2),c.add(P),v.push(P);let q=new oe(new on(200,200),Vn("#e7ede3"));return q.rotation.x=-Math.PI/2,q.position.y=Tt-u.stairDrop-.32,q.receiveShadow=!0,i.add(q),{structure:e,full:n,cut:s,roof:r,garden:o,doors:a,lightsGroup:c,lights:v,base:q,openingMeshes:g,doorLeaves:p,wallGroups:_,front:new Lt,rear:new Lt,bath:new Lt,frontLeaf:new Lt,rearPivot:new Lt,bathLeaf:new Lt}}var Hy=Lo(ki.structure);var Wi=()=>JSON.parse(JSON.stringify(Hy));function uu(i,t){if(t.room?.kind==="video-bedroom")return Yf(i,t);sc(t);let e=new Lt,n=new Lt,s=new Lt,r=new Lt,o=new Lt,a=new Lt,c=new Lt;i.add(e,n,s,r,o,a,c);let l=t.bounds,h=t.bathroom,u=t.colors,f=l.right-l.left,d=l.front-l.back,m=(l.left+l.right)/2,_=(l.front+l.back)/2,g=.15;function p(P,q){return P.userData.structureId=q,P}function v(P,q,A,F,$,Mt,at,H,Z,st=0){let ot=wt(P,q,A,F,$,Mt,at,H,st);return Z&&p(ot,Z),ot}let b={};function x(P,q,A,F,$,Mt){let at=hc(t.finishes[$],u[$],P,q),H=new oe(new on(P,q),at);H.rotation.x=-Math.PI/2,H.position.set(A,Tt+.008,F),H.receiveShadow=!0,p(H,Mt),e.add(H)}v(e,f,.36,d,m,.18,_,u.foundation,"floor",.025),x(f-.15,d-.15,m,_,"floor","floor"),v(e,h.w,.36,h.d,h.x,.18,h.z,u.foundation,"bathroom"),x(h.w-.15,h.d-.15,h.x,h.z,"bathFloor","bathroom");let C=l.back-t.balcony.depth/2;v(e,f,.12,t.balcony.depth,m,Tt-.07,C,u.balcony,"balcony",.008);for(let P=l.back-t.balcony.depth+.07;P<l.back;P+=.17)v(e,f-.08,.004,.009,m,Tt-.007,P,u.rail,"balcony");let R=l.back-t.balcony.depth+.055;for(let P=l.left+.1;P<l.right-.05;P+=.23)P>l.right-1.1&&P<l.right-.17||v(e,.035,.82,.035,P,Tt+.42,R,u.rail,"balcony");v(e,f-.9,.055,.07,m-.43,Tt+.86,R,u.rail,"balcony");for(let P of[l.left+.04,l.right-.04]){v(e,.05,.08,t.balcony.depth,P,Tt+.86,C,u.rail,"balcony");for(let q=R+.1;q<l.back-.05;q+=.23)v(e,.04,.8,.04,P,Tt+.42,q,u.rail,"balcony")}let U=[];for(let[P,q]of[[m-.9,_-.6],[m+.9,_+.8],[h.x,h.z],[m,C]]){De(c,.065,.065,.05,P,Tt+2.77,q,"#f5e8d3");let A=new Ni("#ffdfaa",0,5,2);A.position.set(P,Tt+2.5,q),c.add(A),U.push(A)}let N={},S={};function M(P,q,A,F,$,Mt,at,H,Z){let st=[A,F,...Mt.flatMap(ot=>[Math.max(A,ot.at-ot.w/2),Math.min(F,ot.at+ot.w/2)])].filter(ot=>ot>=A&&ot<=F).sort((ot,_t)=>ot-_t);for(let ot=1;ot<st.length;ot++){let _t=st[ot-1],zt=st[ot];if(zt-_t<.002)continue;let Kt=(_t+zt)/2,D=Mt.find(tt=>Kt>tt.at-tt.w/2&&Kt<tt.at+tt.w/2),ct=D?[[0,D.sill],[D.sill+D.h,H]]:[[0,H]];for(let[tt,nt]of ct){if(nt-tt<.002)continue;let it=q==="x"?zt-_t:g,xt=q==="x"?g:zt-_t,dt=q==="x"?Kt:$,bt=q==="x"?$:Kt;v(P,it,nt-tt,xt,dt,Tt+(nt+tt)/2,bt,at,Z)}}}function L(P){let q=ae(t,P.side),A=q.axis==="x",F=A?[P.at,q.fixed]:[q.fixed,P.at],$=F[0],Mt=F[1],at=new Lt;at.position.set($,Tt+P.sill,Mt),A||(at.rotation.y=-Math.PI/2),a.add(at),at.userData.structureId=P.id,N[P.id]=at;let H=u.frame,Z=P.color||(P.kind==="window"?u.window:u.door);for(let st of[-P.w/2,P.w/2])v(at,.055,P.h,.1,st,P.h/2,0,H,P.id);for(let st of[0,P.h])v(at,P.w+.06,.055,.1,0,st,0,H,P.id);if(P.kind==="window")v(at,P.w-.06,P.h-.08,.024,0,P.h/2,0,new $e({color:Z,transparent:!0,opacity:.32,depthWrite:!1,side:Pe}),P.id),v(at,.027,P.h,.09,0,P.h/2,0,H,P.id);else if(P.id==="front-door"&&P.w>=1.3){let st=P.w/2-.04,ot=new Lt;at.add(ot),v(ot,st,P.h-.08,.029,-P.w/4,P.h/2,0,P.color?Z:Ss,P.id),v(ot,.025,P.h-.05,.05,-P.w/2+.035,P.h/2,0,H,P.id),v(ot,.025,.16,.05,-.06,P.h*.51,.045,H,P.id),v(at,st,P.h-.08,.029,P.w/4,P.h/2,-.015,P.color?Z:Ss,P.id),v(at,.028,P.h-.05,.05,P.w/2-.04,P.h/2,0,H,P.id),S[P.id]=ot}else{let st=new Lt;st.position.x=-P.w/2+.04,at.add(st),v(st,P.w-.08,P.h-.08,.032,P.w/2-.04,P.h/2,0,Z,P.id),v(st,.022,.13,.08,P.w-.2,P.h*.51,.05,H,P.id),S[P.id]=st}}for(let P of Bn.filter(q=>q!==Hi(t))){let q=ae(t,P),A=t.openings.filter(H=>H.side===P&&H.at+H.w/2>q.start&&H.at-H.w/2<q.end),F=P.startsWith("bath-"),$=F?2.74:3,Mt=new Lt,at=new Lt;n.add(Mt),s.add(at),b[P]={full:Mt,low:at};for(let H of F?[{...q,id:P+"-wall"}]:Mn(t,P)){let Z=H.id,st=t.segmentColors?.[Z]||(F?u.bathWall:u[P+"Wall"]||u.wall);M(Mt,q.axis,H.start,H.end,q.fixed,A,st,$,Z);let ot=A.filter(_t=>_t.kind==="door").map(_t=>({..._t,h:.65,sill:0}));M(at,q.axis,H.start,H.end,q.fixed,ot,st,.64,Z)}}for(let P of t.openings)L(P);for(let P of t.partitions){let q=new Lt,A=new Lt;n.add(q),s.add(A),b[P.id]={full:q,low:A};let F=v(q,P.w,P.h,P.d,P.x,Tt+P.h/2,P.z,P.color||u.wall,P.id),$=v(A,P.w,Math.min(.65,P.h),P.d,P.x,Tt+Math.min(.65,P.h)/2,P.z,P.color||u.wall,P.id);F.rotation.y=$.rotation.y=P.rot||0}let V=.84,E=f/2+.35,O=Math.atan2(V,f/2),z=d+.65;for(let P of[-1,1]){let q=v(r,Math.hypot(E,V),.13,z,m+P*E/2,Tt+3+V/2,_,u.roof,"roof");q.rotation.z=-P*O}for(let P of[l.back,l.front]){let q=new as;q.moveTo(l.left,0),q.lineTo(l.right,0),q.lineTo(m,V),q.closePath();let A=new oe(new ar(q,{depth:.13,bevelEnabled:!1}),Vn(u.wall));A.position.set(0,Tt+3,P-.065),A.castShadow=!0,p(A,"roof"),r.add(A)}v(r,h.w+.3,.11,h.d+.4,h.x,Tt+2.86,h.z,u.bathRoof,"bath-roof");let B=v(r,f,.1,t.balcony.depth+.2,m,Tt+2.8,C,u.roof,"roof");B.rotation.x=-.07;let J=new Lt;J.position.set(m,Tt,l.front),a.add(J);for(let P=0;P<3;P++){let q=3-P;v(e,1.85,.126*q,.29,m,.063*q,l.front+.19+P*.27,u.foundation,"floor"),v(e,.9,.126*q,.29,l.right-.5,.063*q,R-.22-P*.27,u.balcony,"balcony")}v(o,13,.12,13,-.2,-.08,0,u.garden,"garden",.07);for(let P=l.front+1;P<6;P+=.5)v(o,1.2,.03,.31,m,.02,P,"#d6d7c8","garden",.01);for(let[P,q]of[[-5,-3.8],[5,-4],[5,3.6],[-4.9,4]]){let A=De(o,.07,.13,1.4,P,.7,q,"#807556",9),F=new oe(new cs(.75,1),Vn("#71885e"));F.position.set(P,1.75,q),o.add(F),A.userData.structureId="garden"}let G=new oe(new on(200,200),Vn("#e7ede3"));return G.rotation.x=-Math.PI/2,G.position.y=-.15,G.receiveShadow=!0,i.add(G),{structure:e,full:n,cut:s,roof:r,garden:o,doors:a,lightsGroup:c,lights:U,base:G,openingMeshes:N,doorLeaves:S,wallGroups:b,front:N["front-door"]||new Lt,rear:N["rear-door"]||new Lt,bath:N["bath-inner"]||new Lt,frontLeaf:S["front-door"]||new Lt,rearPivot:S["rear-door"]||new Lt,bathLeaf:S["bath-inner"]||new Lt}}function $f(i,t){for(let e of["structure","full","cut","roof","garden","doors","lightsGroup"])i.remove(t[e]),t[e].traverse(n=>{n.geometry&&!n.geometry.userData.shared&&n.geometry.dispose(),n.material&&!n.material.userData.shared&&(n.material.userData.floorTexture&&n.material.map?.dispose(),n.material.dispose())});i.remove(t.base),t.base.geometry.dispose()}function Zf(i){let{$:t,$$:e,escapeHTML:n}=i,s="floor",r=null,o=null,a=null,c=0,l=new Di(new Te,new Fn({color:"#3e886b",depthTest:!1}));l.renderOrder=20,l.visible=!1,i.scene.add(l);let h={wall:"General walls",floor:"Main floor",foundation:"Foundation",bathWall:"Bathroom walls",bathFloor:"Bathroom floor",roof:"Roof / beams",bathRoof:"Bathroom roof",balcony:"Balcony deck",rail:"Balcony rails",door:"Doors",window:"Window glass",frame:"Frames",trim:"Wall trim",garden:"Garden",panel:"Timber panels",curtain:"Curtains"},u=()=>i.getState(),f=()=>u().structure,d=(E,O,z,B=-6,J=6,G=.05)=>`<label class="field-label">${O}<input type="number" data-build-field="${E}" min="${B}" max="${J}" step="${G}" value="${Number(z).toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}"></label>`,m=(E,O,z)=>`<label class="field-label">${O}<input type="color" data-build-color="${E}" value="${z}"></label>`,_=(E,O,z="secondary")=>`<button id="${E}" class="btn ${z} wide">${O}</button>`;function g(E){s=E,b(),V()}function p(E){l.geometry.dispose(),l.geometry=new Te().setFromPoints(E.map(O=>new I(O.x,O.y??Tt+.035,O.z))),l.visible=!0}function v(E){let O=E.axis==="x",z={x:O?E.start:E.fixed,z:O?E.fixed:E.start},B={x:O?E.end:E.fixed,z:O?E.fixed:E.end};p([z,B,{...B,y:Tt+3.02},{...z,y:Tt+3.02},z])}function b(){r=null,o=null,l.visible=!1,i.controls.enabled=!0,i.renderer.domElement.style.cursor="",t("#buildToolHint").hidden=!0,t("#splitWallTool").classList.remove("active"),t("#addPartition").classList.remove("active")}function x(E){b(),r=E,t("#buildToolHint").hidden=!1,t("#buildToolText").textContent=E==="split"?"Click a point on an outside wall to split it.":"Click the start and end of your new wall.",t("#"+(E==="split"?"splitWallTool":"addPartition")).classList.add("active"),i.renderer.domElement.style.cursor="crosshair",E==="draw"&&i.view("top")}function C(E){for(;E;){if(!E.visible)return!1;E=E.parent}return!0}function R(E){i.ray(E);let O=i.getHouse();for(let z of i.raycaster.intersectObjects([O.structure,O.full,O.cut,O.doors,O.roof,O.garden],!0)){if(!C(z.object))continue;let B=z.object;for(;B;){if(B.userData.structureId)return{id:B.userData.structureId,point:z.point};B=B.parent}}return null}function U(E){let O=i.pointAt(E);if(!O)return null;let z=i.getSnap()?.1:.01,B=Math.round(O.x/z)*z,J=Math.round(O.z/z)*z,G=f().bounds;for(let P of["left","right"])Math.abs(B-G[P])<.13&&(B=G[P]);for(let P of["front","back"])Math.abs(J-G[P])<.13&&(J=G[P]);return{x:Math.max(-6,Math.min(6,B)),z:Math.max(-6,Math.min(6,J))}}function N(E){let O=f(),z=R(E),B=z&&ec(O,z.id),J=B?.side||(z?.id.endsWith("-wall")?z.id.replace("-wall",""):null);if(Re.includes(J)){let q=ae(O,J);return{side:J,at:z.point[q.axis]}}let G=i.pointAt(E);if(!G)return null;let P=Re.map(q=>{let A=ae(O,q);return{side:q,at:G[A.axis],distance:Math.abs((A.axis==="x"?G.z:G.x)-A.fixed),v:A}}).filter(q=>q.at>=q.v.start&&q.at<=q.v.end).sort((q,A)=>q.distance-A.distance);return P[0]?.distance<.32?P[0]:null}function S(E,O,z=!0){try{let B=i.getSnap()?.1:.01,J=z?Math.round(O/B)*B:O,G;i.edit(q=>G=zf(q,E,J))&&(s=G.id,b(),V(),i.toast("Wall split. Select either section to edit or extend it."))}catch(B){i.toast(B.message)}}function M(E){let O=f(),z=O.finishes[E];return`<div class="finish-heading"><h3>Floor finish</h3><span>Pattern + color</span></div><div class="finish-grid">${gi.map(B=>`<button class="finish-card ${z.material===B.id?"active":""}" data-floor-material="${B.id}" title="${B.detail}" aria-pressed="${z.material===B.id}"><img alt="" src="${qf(B.id,O.colors[E])}"><span>${B.name}</span></button>`).join("")}</div>${m("colors."+E,"Floor color \xB7 pattern stays",O.colors[E])}<div class="row">${d("finish.scale",z.material==="wood"||z.material==="herringbone"?"Pattern size \xB7 m":"Tile / pattern size \xB7 m",z.scale,.15,3,.05)}<label class="field-label">Pattern direction<select data-build-field="finish.rotation">${[0,45,90,135,180,270].map(B=>`<option value="${B}" ${z.rotation===B?"selected":""}>${B}\xB0</option>`).join("")}</select></label></div><p class="small-note">Color changes tint the same texture. Size and direction change the pattern independently.</p>`}function L(E){let O=E.end-E.start;return`<div class="editor-divider"></div><h3>Split this wall</h3><p class="small-note">Split by a distance from this section\u2019s start, or use the Split wall tool in the scene.</p><label class="field-label">Distance from start \xB7 m<input id="splitDistance" type="number" min=".25" max="${Math.max(.25,O-.25)}" step=".05" value="${(O/2).toFixed(2)}"></label>${_("splitSelected","Split into two sections")}<div class="editor-divider"></div><h3>Bathroom extension</h3><p class="small-note">Extend this wall section out from the main room. It stays attached as the house changes. The existing bathroom and fixtures follow the new section.</p><label class="field-label">Outward depth \xB7 m<input id="extensionDepth" type="number" min=".8" max="4" step=".1" value="${f().bathroom.depth}"></label>${_("extendBathroom","Extend section as bathroom","primary")}`}function V(){let E=f(),O=E.bounds,z=E.bathroom,B=E.openings.find(F=>F.id===s)||E.partitions.find(F=>F.id===s),J=ec(E,s),G=(F,$,Mt=!1)=>`<button data-build-select="${n(F)}" class="${s===F?"active ":""}${Mt?"segment-row":""}"><span>${n($)}</span><small>${s===F?"EDITING":"\u2192"}</small></button>`;t("#buildList").innerHTML=G("floor","Main floor / footprint")+Re.map(F=>G(F+"-wall",Vi[F]+" wall")+(Mn(E,F).length>1?Mn(E,F).map($=>G($.id,`Section ${$.index+1} \xB7 ${($.end-$.start).toFixed(2)} m`,!0)).join(""):"")).join("")+(z.enabled===!1?"":G("bathroom","Attached bathroom"))+(E.balcony.enabled===!1?"":G("balcony","Balcony"))+(E.room?G("loft","Green loft frame & ceiling")+G("stairwell","Stair opening"):G("roof","Main roof")+G("bath-roof","Bathroom roof")+G("garden","Garden / surroundings"))+E.openings.map(F=>G(F.id,`${F.kind==="door"?"Door":"Window"} \xB7 ${F.side}`)).join("")+E.partitions.map((F,$)=>G(F.id,`Interior wall ${$+1}`)).join(""),e("[data-build-select]").forEach(F=>F.onclick=()=>g(F.dataset.buildSelect)),t("#buildPalette").innerHTML=Object.entries(h).filter(([F])=>E.colors[F]&&!(z.enabled===!1&&["bathWall","bathFloor","bathRoof"].includes(F))&&!(E.balcony.enabled===!1&&["balcony","rail"].includes(F))&&!(E.room&&F==="garden")).map(([F,$])=>`<label><input type="color" value="${E.colors[F]}" data-palette="${F}"><span>${$}</span></label>`).join(""),e("[data-palette]").forEach(F=>F.onchange=()=>i.edit($=>$.colors[F.dataset.palette]=F.value));let P="",q="",A=null;if(s==="floor")P="Main floor",A="floor",q=M("floor")+`<div class="editor-divider"></div><h3>Room footprint</h3><div class="row">${d("bounds.left","Left X",O.left,-5,2)}${d("bounds.right","Right X",O.right,-2,5)}</div><div class="row">${d("bounds.back","Back Z",O.back,-5,2)}${d("bounds.front","Front Z",O.front,-2,5)}</div><p class="small-note">${(O.right-O.left).toFixed(2)} \xD7 ${(O.front-O.back).toFixed(2)} m. ${E.room?"Estimated from video until you enter measured dimensions.":"The attached bathroom follows its wall."}</p>${E.room?d("room.height","Ceiling / loft height \xB7 m",E.room.height,2,3,.05)+'<label class="measured-check"><input id="dimensionsConfirmed" type="checkbox" '+(E.room.estimated?"":"checked")+"> I have entered measured dimensions</label>":""}`;else if(J||Re.some(F=>s===F+"-wall")){let F=J?.side||s.replace("-wall",""),$=J||ae(E,F);P=Vi[F]+(J?` wall \xB7 section ${J.index+1}`:" wall"),q=`<p class="small-note">${($.end-$.start).toFixed(2)} m along the ${Vi[F].toLowerCase()} wall${J?". This section has its own color and can become the bathroom extension.":". Move the wall to resize the house."}</p>`,J||(q+=d("bounds."+F,"Wall position \xB7 "+($.axis==="x"?"Z":"X"),O[F],-5,5)),q+=m(J?"segment.color":"colors."+F+"Wall",J?"This section color":"This wall color",E.segmentColors[J?.id]||E.colors[F+"Wall"]||E.colors.wall)+L($),r||v($)}else if(s==="bathroom"){P="Attached bathroom",A="bathFloor";let F=ae(E,z.side);q=`<p class="attachment-note">Attached to the ${Vi[z.side].toLowerCase()} wall \xB7 ${(z.end-z.start).toFixed(2)} m section</p><p class="small-note">Resize the section and outward depth here. To attach it elsewhere, split an exterior wall and choose a section.</p><div class="row">${d("bathroom.start","Section start \xB7 "+F.axis.toUpperCase(),z.start,F.start,F.end-.8)}${d("bathroom.end","Section end \xB7 "+F.axis.toUpperCase(),z.end,F.start+.8,F.end)}</div>${d("bathroom.depth","Outward depth \xB7 m",z.depth,.8,4,.1)}${m("colors.bathWall","Bathroom walls",E.colors.bathWall)}<div class="editor-divider"></div>${M("bathFloor")}`}else if(s.startsWith("bath-")&&s.endsWith("-wall"))P="Bathroom "+s.replace("bath-","").replace("-wall","")+" wall",q=m("colors.bathWall","Bathroom walls",E.colors.bathWall)+_("editBathFloor","Edit bathroom floor");else if(s==="loft"&&E.room)P="Green loft frame",q='<p class="attachment-note">Beams, ladder and hatch from the video. Switch Ceiling on to see the overhead infill.</p>'+d("room.height","Ceiling / loft height \xB7 m",E.room.height,2,3,.05)+d("room.ladderRun","Ladder horizontal run \xB7 m",E.room.ladderRun,.5,1.5,.05)+m("colors.roof","Green frame color",E.colors.roof);else if(s==="stairwell"&&E.room)P="Stair opening",q='<p class="small-note">The opening and descending steps are estimated from the video. The person stops at the landing; stair climbing is not simulated.</p>'+d("room.stairWidth","Opening width \xB7 m",E.room.stairWidth,.6,2,.05)+d("room.stairRun","Opening length \xB7 m",E.room.stairRun,.8,4,.05)+d("room.stairDrop","Visible stair drop \xB7 m",E.room.stairDrop,.6,3,.05);else if(s==="balcony")P="Back balcony",q=d("balcony.depth","Depth",E.balcony.depth,.5,3)+m("colors.balcony","Deck color",E.colors.balcony)+m("colors.rail","Rail color",E.colors.rail);else if(s==="roof"||s==="bath-roof"){P=s==="roof"?"Main roof":"Bathroom roof";let F=s==="roof"?"roof":"bathRoof";q=m("colors."+F,"Roof color",E.colors[F])}else if(s==="garden")P="Garden",q=m("colors.garden","Ground color",E.colors.garden);else if(B?.kind){let F=ae(E,B.side);P=B.kind==="door"?"Door":"Window",q=`<label class="field-label">Wall<select data-build-field="opening.side">${Bn.filter($=>(z.enabled!==!1||!$.startsWith("bath-"))&&$!==Hi(E)).map($=>`<option value="${$}" ${B.side===$?"selected":""}>${$}</option>`).join("")}</select></label><div class="row">${d("opening.at",F.axis.toUpperCase()+" position",B.at)}${d("opening.w","Width",B.w,.4,3)}</div><div class="row">${d("opening.h","Height",B.h,.3,(B.side.startsWith("bath-"),2.7))}${d("opening.sill","Sill height",B.sill,0,2.5)}</div>${m("opening.color","Individual color",B.color||E.colors[B.kind])}${_("deleteStructure","Delete "+B.kind)}`}else if(B)P="Interior wall",q=`<div class="row">${d("partition.x","Center X",B.x)}${d("partition.z","Center Z",B.z)}</div><div class="row">${d("partition.w","Length",B.w,.1,6)}${d("partition.d","Thickness",B.d,.1,6)}</div><div class="row">${d("partition.h","Height",B.h,.3,3)}${d("partition.deg","Rotation \xB0",(B.rot||0)*180/Math.PI,-360,360,15)}</div>${m("partition.color","Wall color",B.color)}${_("deleteStructure","Delete wall")}`;else return s="floor",V();!J&&!Re.some(F=>s===F+"-wall")&&!r&&(l.visible=!1),t("#buildInspectorTitle").textContent=P,t("#buildInspector").innerHTML=q+Jh(E).map(F=>`<p class="warning">${n(F)}</p>`).join(""),e("[data-build-field]").forEach(F=>F.onchange=()=>{let[$,Mt]=F.dataset.buildField.split("."),at=F.tagName==="SELECT"&&$==="opening"?F.value:Number(F.value);if(typeof at=="number"&&(!Number.isFinite(at)||F.min!==""&&at<Number(F.min)||F.max!==""&&at>Number(F.max))){i.toast("Check the allowed dimension range."),V();return}i.edit(H=>{if($==="bathroom"){let st=H.bathroom;Zh(H,st.side,Mt==="start"?at:st.start,Mt==="end"?at:st.end,Mt==="depth"?at:st.depth);return}let Z=$==="finish"?H.finishes[A]:$==="opening"?H.openings.find(st=>st.id===s):$==="partition"?H.partitions.find(st=>st.id===s):H[$];if(Z&&(Mt==="deg"?Z.rot=at*Math.PI/180:Z[Mt]=at,$==="opening"&&Mt==="side")){let st=ae(H,at);Z.at=Math.min(st.end-Z.w/2-.1,Math.max(st.start+Z.w/2+.1,Z.at))}})}),e("[data-build-color]").forEach(F=>F.onchange=()=>{let[$,Mt]=F.dataset.buildColor.split(".");i.edit(at=>{$==="segment"?at.segmentColors[s]=F.value:$==="opening"?at.openings.find(H=>H.id===s).color=F.value:$==="partition"?at.partitions.find(H=>H.id===s).color=F.value:at.colors[Mt]=F.value})}),e("[data-floor-material]").forEach(F=>F.onclick=()=>i.edit($=>{let Mt=gi.find(at=>at.id===F.dataset.floorMaterial);$.finishes[A].material=Mt.id,$.finishes[A].scale=Mt.scale})),t("#splitSelected")&&(t("#splitSelected").onclick=()=>{let F=J||ae(E,s.replace("-wall","")),$=Number(t("#splitDistance").value);if(!Number.isFinite($)||$<.25||$>F.end-F.start-.25){i.toast("Leave at least 25 cm in each section.");return}S(F.side,F.start+$,!1)}),t("#extendBathroom")&&(t("#extendBathroom").onclick=()=>{let F=J||ae(E,s.replace("-wall","")),$=Number(t("#extensionDepth").value);i.edit(Mt=>Zh(Mt,F.side,F.start,F.end,$))&&(s="bathroom",V(),i.toast("Bathroom extended from that section. Its shared wall stays connected."))}),t("#dimensionsConfirmed")&&(t("#dimensionsConfirmed").onchange=F=>i.edit($=>$.room.estimated=!F.target.checked)),t("#editBathFloor")&&(t("#editBathFloor").onclick=()=>g("bathroom")),t("#deleteStructure")&&(t("#deleteStructure").onclick=()=>{i.edit(F=>{F.openings=F.openings.filter($=>$.id!==s),F.partitions=F.partitions.filter($=>$.id!==s),delete F.wallVisibility[s]}),s="floor",V()})}t("#splitWallTool").onclick=()=>x("split"),t("#addPartition").onclick=()=>x("draw"),t("#cancelBuildTool").onclick=b;for(let E of["Door","Window"])t("#add"+E).onclick=()=>{let O=f();if(O.openings.length>=40){i.toast("Maximum 40 openings.");return}let z=ec(O,s),B=z?.side||(Re.includes(s.replace("-wall",""))?s.replace("-wall",""):"front"),J=z||ae(O,B),G=`${E.toLowerCase()}-${Date.now().toString(36)}`;i.edit(P=>P.openings.push({id:G,kind:E.toLowerCase(),side:B,at:(J.start+J.end)/2,w:E==="Door"?.8:1,h:E==="Door"?2:1.1,sill:E==="Door"?0:1}))&&g(G)};return t("#resetStructure").onclick=()=>{confirm("Restore the supplied house structure and finishes? Your furniture stays. Undo is available.")&&(i.edit(E=>Object.assign(E,i.cloneStructure())),g("floor"))},i.renderer.domElement.addEventListener("pointerdown",E=>{if(i.getMode()!=="build"||E.button!==0||i.getMeasure())return;if(r){E.stopImmediatePropagation(),E.preventDefault(),i.controls.enabled=!1,i.renderer.domElement.setPointerCapture(E.pointerId);return}let O=R(E);if(!O)return;g(O.id);let z=i.pointAt(E),B=f();if(!z)return;let J=B.openings.find(q=>q.id===s)||B.partitions.find(q=>q.id===s),G=Re.find(q=>s===q+"-wall");if(!J&&!G)return;let P=J&&!J.kind?J:z;a={id:s,pointer:E.pointerId,x:E.clientX,y:E.clientY,offsetX:P.x-z.x,offsetZ:P.z-z.z,before:JSON.stringify(u()),started:!1},i.controls.enabled=!1,i.renderer.domElement.setPointerCapture(E.pointerId)},!0),i.renderer.domElement.addEventListener("pointermove",E=>{if(i.getMode()!=="build")return;if(r==="draw"&&o){let z=U(E);z&&(p([o,z]),t("#buildToolText").textContent=`Wall length ${Math.hypot(z.x-o.x,z.z-o.z).toFixed(2)} m \xB7 click to finish`)}if(r==="split"){let z=N(E);if(z){let B=ae(f(),z.side),J=i.getSnap()?.1:.01,G=Math.round(z.at/J)*J;p([{x:B.axis==="x"?G:B.fixed,z:B.axis==="x"?B.fixed:G},{x:B.axis==="x"?G:B.fixed,z:B.axis==="x"?B.fixed:G,y:Tt+3.12}])}}if(!a||E.pointerId!==a.pointer)return;if(!a.started){if(Math.hypot(E.clientX-a.x,E.clientY-a.y)<5)return;i.checkpoint(),a.started=!0}let O=i.pointAt(E);O&&(i.moveStructure(a.id,O.x+a.offsetX,O.z+a.offsetZ),performance.now()-c>85&&(i.rebuildStructure(),c=performance.now()))}),i.renderer.domElement.addEventListener("pointerup",E=>{if(i.getMode()==="build"){if(r){if(E.stopImmediatePropagation(),E.preventDefault(),i.controls.enabled=!0,r==="split"){let O=N(E);O?S(O.side,O.at):i.toast("Click an exterior wall, or enter a precise split in its inspector.")}else{let O=U(E);if(!O)return;if(!o)o=O,t("#buildToolText").textContent="Start set. Click the end of the new wall.";else{let z=Math.hypot(O.x-o.x,O.z-o.z);if(z<.25||z>6){i.toast("Draw a wall between 0.25 and 6 m long.");return}let B=o,J=No();i.edit(G=>G.partitions.push({id:J,x:(B.x+O.x)/2,z:(B.z+O.z)/2,w:z,d:.15,h:G.room?.height||3,rot:-Math.atan2(O.z-B.z,O.x-B.x),color:G.colors.wall}))&&g(J)}}return}a&&E.pointerId===a.pointer&&(a.started&&(u().preset="custom",i.commit()),a=null,i.controls.enabled=!0)}},!0),i.renderer.domElement.addEventListener("pointercancel",()=>{a=null,i.controls.enabled=!0}),window.addEventListener("keydown",E=>{E.key==="Escape"&&r&&(b(),V())}),{render:V,cancelTool:b,select:g}}var rt=i=>document.querySelector(i),Be=i=>[...document.querySelectorAll(i)],Sr=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);Gf();var Jf;function ye(i){rt("#toast").textContent=i,rt("#toast").classList.add("show"),clearTimeout(Jf),Jf=setTimeout(()=>rt("#toast").classList.remove("show"),4200)}var Gy=!0;function tp(i,t){try{return JSON.parse(localStorage.getItem(i))??t}catch{return t}}function mu(i,t){try{return localStorage.setItem(i,JSON.stringify(t)),!0}catch{return Gy=!1,rt("#saveStatus").textContent="Export JSON to save",!1}}var yt=Gi({...ki,structure:Wi()});try{let i=tp("house-studio-autosave-v1",null);i&&(yt=Gi(i))}catch{}yt.structure||(yt.structure=Wi());var mn="explore",Je=null,Yi=!0,xe="cutaway",pn=!1,dc="day",yi=!1,ep=!1,Bo=!1,Ts=[],ko=[],Mr=new Map,wn=null,Hn=null,ei=null,np="iso",Oe=new nr;Oe.background=new Gt("#e7ede3");Oe.fog=new Jr("#e7ede3",26,65);var fc=rt("#canvasHost"),Ae;try{Ae=new Io({antialias:!0,alpha:!1,preserveDrawingBuffer:!0})}catch(i){throw rt("#loading").innerHTML="<b>3D rendering is unavailable.</b><small>Use Chrome or Edge with hardware acceleration enabled.</small><small>Your saved layouts have not been changed.</small>",i}Ae.setPixelRatio(Math.min(devicePixelRatio,1.65));Ae.shadowMap.enabled=!0;Ae.shadowMap.type=nl;Ae.toneMapping=Mo;Ae.toneMappingExposure=1.12;Ae.outputColorSpace=ke;fc.append(Ae.domElement);Ae.domElement.setAttribute("aria-label","House scene. Use mouse to orbit and zoom; select furniture in Decorate.");var Es=new Ve(39,1,.05,180),vi=new us(-7,7,7,-7,.05,100),Xe=Es;Es.position.set(8.2,9.4,12.7);var me=new Ql(Xe,Ae.domElement);me.target.set(-.58,.65,-.15);me.enableDamping=!0;me.dampingFactor=.1;me.minDistance=2;me.maxDistance=28;me.maxPolarAngle=Math.PI*.485;me.enablePan=!0;me.zoomToCursor=!0;var ip=new cr("#f5faf1","#828d70",2.2);Oe.add(ip);var Gn=new ds("#fff3d8",3.2);Gn.position.set(-6,10,8);Gn.castShadow=!0;Gn.shadow.mapSize.set(2048,2048);Object.assign(Gn.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.5,far:40});Gn.shadow.normalBias=.035;Gn.shadow.bias=-1e-4;Gn.shadow.radius=4;Oe.add(Gn);var sp=new ds("#dcebea",.55);sp.position.set(6,4,-4);Oe.add(sp);var Ge=uu(Oe,yt.structure),fu=new Lt;Oe.add(fu);var ue=Vf(Oe);ue.root.visible=!1;var Kf=JSON.stringify(yt.structure),Is=new yo(12,120,"#9baea0","#c4cfc0");Is.position.y=Tt+.008;Is.material.transparent=!0;Is.material.opacity=.18;Is.visible=!1;Oe.add(Is);var zo=new vo(new Ln,4947297);Oe.add(zo);zo.visible=!1;var qi=new Lt,bi=new Lt,br=new Lt,Vo=new Lt;Oe.add(qi,bi,br,Vo);bi.visible=!1;Vo.visible=!1;var Yt={path:[],index:0,action:null,phase:"idle",elapsed:0,transition:null,routine:!1,routineIndex:0,wait:0},Go=()=>({x:ue.root.position.x,z:ue.root.position.z}),As=1.7;function Wo(){for(let i of Mr.values())fu.remove(i),cu(i);Mr.clear();for(let i of yt.items){let t=lu(i);Mr.set(i.id,t),fu.add(t)}Tr(),op()}function pc(){let i=JSON.stringify(yt.structure);i!==Kf&&(Kf=i,$f(Oe,Ge),Ge=uu(Oe,yt.structure),ii(),_u(),Ge.garden.visible=rt("#gardenToggle").checked,Ge.base.material.color.set(Oe.background),dp(),wu())}function Xo(){mu("house-studio-autosave-v1",yt)&&(rt("#saveStatus").textContent="Saved on this device")}function Wn(){Ts.push(JSON.stringify(yt)),Ts.length>45&&Ts.shift(),ko=[],wr()}function wr(){rt("#undoBtn").disabled=!Ts.length,rt("#redoBtn").disabled=!ko.length}function Xn(i=!0){yt.structure||(yt.structure=Wi()),i?Wo():(Tr(),op()),pc(),Xo(),wr(),Je&&Yo(),rt("#pathResults").innerHTML="",En(!1)}function rp(){Ts.length&&(ko.push(JSON.stringify(yt)),yt=JSON.parse(Ts.pop()),yt.structure||(yt.structure=Wi()),Je=null,Wo(),pc(),Xo(),wr(),En(!1),ye("Change undone."))}function pu(){ko.length&&(Ts.push(JSON.stringify(yt)),yt=JSON.parse(ko.pop()),yt.structure||(yt.structure=Wi()),Je=null,Wo(),pc(),Xo(),wr(),En(!1),ye("Change restored."))}function op(){let i=yt.structure,t=i.room?.kind==="video-bedroom",e=t&&i.room.estimated;rt("#layoutLabel").textContent=yt.name,rt("#sceneSubline").textContent=Ms.find(n=>n.id===yt.preset)?.description||(t?"Your room. Your arrangement.":"Your furniture. Your arrangement."),rt("#mainDimensions").textContent=`${(i.bounds.right-i.bounds.left).toFixed(2)} \xD7 ${(i.bounds.front-i.bounds.back).toFixed(2)}`,rt("#primaryDimensionLabel").textContent=t?"room \xB7 metres":"main house \xB7 metres",rt("#houseFactsTitle").textContent=t?"This room":"The house",rt("#bathDimensions").textContent=t?`${i.room.height.toFixed(2)} m`:`${i.bathroom.w.toFixed(2)} \xD7 ${i.bathroom.d.toFixed(2)}`,rt("#secondaryDimensionLabel").textContent=t?e?"ceiling \xB7 estimated":"ceiling \xB7 measured":"bath extension \xB7 metres",rt("#balconyDimensions").textContent=i.balcony.enabled===!1?"Not in this room":`${(i.bounds.right-i.bounds.left).toFixed(2)} \xD7 ${i.balcony.depth.toFixed(2)} m`,rt("#roofWallHeight").textContent=t?`${i.room.height.toFixed(2)} m \xB7 loft ceiling`:"3.84 / 3.00 m",rt("#bathroomFact").textContent=i.bathroom.enabled===!1?"Not shown in video":"Attached extension",rt("#roomEstimate").hidden=!e,rt("#roomEstimate").textContent="Estimated from your video \xB7 enter measured room sizes in Build",rt("#gardenToggle").disabled=t,rt("#standardAssumptions").hidden=t,rt("#videoAssumptions").hidden=!t,rt("#designerReferences").hidden=t;for(let n of["bathroom","balcony"])rt(`[data-action="${n}"]`).disabled=n==="bathroom"?i.bathroom.enabled===!1:i.balcony.enabled===!1;rt('[data-action="entrance"]').lastChild.textContent=t?"Stair landing":"Front door",Be("[data-preset]").forEach(n=>n.classList.toggle("active",n.dataset.preset===yt.preset))}function ap(i){Ms.some(t=>t.id===i)&&(Wn(),yt=eu(i),Je=null,Xn(),pp(),qo("iso"),gu(dc),ye(i==="video-room"?"Your video room loaded. Dimensions are estimates.":"Your supplied room restored. Undo is available."))}function Wy(i){bp.cancelTool(),mn=i,document.body.classList.remove("mode-explore","mode-build","mode-decorate","mode-simulate"),document.body.classList.add("mode-"+i),Be("[data-mode]").forEach(t=>t.classList.toggle("active",t.dataset.mode===i));for(let t of["explore","build","decorate","simulate"])rt("#"+t+"Panel").hidden=t!==i;Is.visible=i==="decorate"&&Yi,Vo.visible=i==="decorate",ue.root.visible=i==="simulate",i!=="decorate"&&(Je=null,Yo(),Tr()),i==="build"&&(pn=!1,ii(),wu()),i==="decorate"&&(pn=!1,ii(),xu()),i==="simulate"?(pn=!1,ii(),Rs()):En(!1),rt("#inputHint").textContent=i==="build"?"Select a surface \xB7 split a wall section \xB7 draw a partition in Plan":i==="decorate"?"Drag furniture to move \xB7 R rotate \xB7 Arrow keys nudge \xB7 Delete remove":i==="simulate"?"Click the floor to walk \xB7 Drag empty space to orbit \xB7 Scroll to zoom":"Drag to orbit \xB7 Scroll to zoom \xB7 Right-drag to pan"}function mc(){let i=fc.clientWidth,t=fc.clientHeight;if(!i||!t)return;Ae.setSize(i,t),Es.aspect=i/t,Es.updateProjectionMatrix();let e=yt.structure.room?4.5:6.15;vi.left=-e*i/t,vi.right=e*i/t,vi.top=e,vi.bottom=-e,vi.updateProjectionMatrix()}new ResizeObserver(mc).observe(fc);function qo(i){Bo=!1,np=i,Be("[data-view]").forEach(n=>n.classList.toggle("active",n.dataset.view===i)),rt("#cameraTourBtn").innerHTML=xi("play");let t=!!yt.structure.room,e=new I(t?0:-.6,t?.85:.6,t?-.12:-.18);if(i==="top")Xe=vi,Xe.position.set(e.x,18,e.z+.001),Xe.up.set(0,0,-1),Xe.lookAt(e),me.object=Xe,me.target.copy(e),me.enableRotate=!1,vi.zoom=1,vi.updateProjectionMatrix(),pn=!1,xe="hidden",rt("#wallSelect").value=xe,ii(),ei=null;else{Xe=Es,me.object=Xe,me.enableRotate=!0,Xe.up.set(0,1,0);let n={iso:t?[1.4,5.8,7.9]:[8.2,9.4,12.7],front:t?[0,2.5,10]:[0,2.5,12],back:[0,3,-12]};ei={from:Xe.position.clone(),to:new I(...n[i]),targetFrom:me.target.clone(),targetTo:e,t:0},i==="front"||i==="back"?(xe="full",pn=!0,rt("#wallSelect").value=xe,ii()):(xe="cutaway",pn=!1,rt("#wallSelect").value=xe,ii())}mc(),me.update()}function ii(){Ge.full.visible=Ge.cut.visible=!0;let i=yt.structure.wallVisibility;Ge.structure.traverse(t=>{t.userData.wallSide&&(t.visible=xe==="full"||xe==="cutaway"&&i[t.userData.wallSide]==="full")});for(let[t,e]of Object.entries(Ge.wallGroups)){let n=xe==="full"?"full":xe==="hidden"?"hidden":i[t]||"low";e.full.visible=n==="full",e.low.visible=n==="low"}Ge.roof.visible=pn,Ge.doors.visible=xe!=="hidden";for(let t of yt.structure.openings){let e=xe==="full"?"full":xe==="hidden"?"hidden":i[t.side]||"low";Ge.openingMeshes[t.id]&&(Ge.openingMeshes[t.id].visible=e!=="hidden")}Ge.lightsGroup.visible=xe==="full",rt("#roofBtn span").textContent=yt.structure.room?pn?"Ceiling on":"Ceiling off":pn?"Roof on":"Roof off",rt("#roofBtn").classList.toggle("active",pn),rt("#viewLabel").textContent=np==="top"?"FLOOR PLAN":xe==="full"?"EXTERIOR":xe==="hidden"?"OPEN PLAN":"CUTAWAY",rt("#wallSelect").value=xe,Xy()}function Xy(){let i=yt.structure,t=[...Bn.filter(e=>(i.bathroom.enabled!==!1||!e.startsWith("bath-"))&&e!==Hi(i)).map(e=>({key:e,label:e.startsWith("bath-")?"Bath \xB7 "+Vi[e.slice(5)]:Vi[e]+" wall"})),...i.partitions.map((e,n)=>({key:e.id,label:"Interior wall "+(n+1)}))];rt("#wallVisibilityRows").innerHTML=t.map(({key:e,label:n})=>{let s=xe==="full"?"full":xe==="hidden"?"hidden":i.wallVisibility[e]||"low";return`<label>${n}<select data-wall-visibility="${Sr(e)}" aria-label="${Sr(n)} visibility">${[["full","Keep full"],["low","Low wall"],["hidden","Hide"]].map(([r,o])=>`<option value="${r}" ${s===r?"selected":""}>${o}</option>`).join("")}</select></label>`}).join(""),Be("[data-wall-visibility]").forEach(e=>e.onchange=()=>{let n=xe,s=e.value,r=e.dataset.wallVisibility;xe="cutaway",Su(o=>{if(n!=="cutaway")for(let a of t)o.wallVisibility[a.key]=n==="full"?"full":"hidden";o.wallVisibility[r]=s})})}function gu(i){dc=i;let e={...{day:{bg:"#e7ede3",sun:"#fff3dc",intensity:3.2,hemi:2.2,pos:[-6,10,8],exposure:1.12},sunset:{bg:"#decbb4",sun:"#ffb56c",intensity:3,hemi:1.35,pos:[-9,3.4,5],exposure:1.12},night:{bg:"#1a2e32",sun:"#b9cee3",intensity:.6,hemi:.55,pos:[5,8,-7],exposure:1.15}}[i],...yt.structure.room&&i==="day"?{pos:[6,9,-2],sun:"#fff4dc",hemi:2.35}:{}};Oe.background.set(e.bg),Oe.fog.color.set(e.bg),Ge.base.material.color.set(e.bg),Gn.color.set(e.sun),Gn.intensity=e.intensity,Gn.position.set(...e.pos),ip.intensity=e.hemi,Ae.toneMappingExposure=e.exposure,document.body.classList.toggle("night",i==="night"),Be("[data-light]").forEach(n=>n.classList.toggle("active",n.dataset.light===i)),_u()}function _u(){Ge.lights.forEach(i=>i.intensity=rt("#lightsToggle").checked?dc==="night"?7:dc==="sunset"?4:1.3:0)}var du=new Map,Xi;function qy(i){if(du.has(i))return du.get(i);try{Xi||(Xi=new Io({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),Xi.setSize(240,170),Xi.setPixelRatio(1),Xi.toneMapping=Mo,Xi.toneMappingExposure=1.25);let t=new nr;t.background=new Gt("#edf1e9"),t.add(new cr("#fff8e9","#b0b7a1",2.7));let e=new ds("#fff5de",3);e.position.set(-3,5,4),t.add(e);let n=tu(i,0,0),s=lu(n);s.position.set(0,0,0),t.add(s);let r=new Ln().setFromObject(s),o=r.getCenter(new I),a=r.getSize(new I),c=Math.max(a.x,a.y,a.z),l=new Ve(37,240/170,.01,100);l.position.copy(o).add(new I(1.5,1.25,1.8).multiplyScalar(c*.83)),l.lookAt(o),Xi.render(t,l);let h=Xi.domElement.toDataURL();return du.set(i,h),cu(s),h}catch{return""}}function Yy(){rt("#presetCards").innerHTML=Ms.map(i=>`<button class="preset-card ${yt.preset===i.id?"active":""}" data-preset="${i.id}"><img alt="Floor plan of ${Sr(i.name)}" src="${i.image}"><span><b>${i.name}</b><small>${i.subtitle}</small></span></button>`).join(""),Be("[data-preset]").forEach(i=>i.onclick=()=>ap(i.dataset.preset))}var uc="All",$y=["All",...new Set(ic.map(i=>i.cat))];function xu(){let i=rt("#searchInput").value.toLowerCase(),t=ic.filter(e=>(uc==="All"||e.cat===uc)&&e.name.toLowerCase().includes(i));rt("#catalogCount").textContent=`${t.length} ITEMS`,rt("#categoryTabs").innerHTML=$y.map(e=>`<button class="${e===uc?"active":""}" data-category="${e}">${e}</button>`).join(""),rt("#catalog").innerHTML=t.map(e=>`<button class="catalog-item" data-add="${e.type}"><img alt="" src="${qy(e.type)}"><span class="add-symbol">+</span><b>${e.name}</b><small>${e.w.toFixed(2)} \xD7 ${e.d.toFixed(2)} m</small></button>`).join("")||'<p class="empty-copy">No matching furniture.</p>',Be("[data-add]").forEach(e=>e.onclick=()=>Zy(e.dataset.add)),Be("[data-category]").forEach(e=>e.onclick=()=>{uc=e.dataset.category,xu()})}function Zy(i){if(yt.items.length>=180){ye("This layout has reached the 180-item limit.");return}Wn();let t=tu(i,0,.5),e=!1,n=[];for(let s=1.5;s>-2;s-=.25)for(let r=-1.8;r<2;r+=.25)n.push({x:r,z:s});for(let s of n)if(t.x=Math.round(s.x*10)/10,t.z=Math.round(s.z*10)/10,!rc(t,yt.items).some(r=>!r.startsWith("Loft:"))){e=!0;break}e?ye(`${Ee[i].name} added.`):(t.x=3.25,t.z=.6,ye("Added beside the house. Drag it into position.")),yt.items.push(t),yt.preset="custom",yt.name=yt.structure.room?"My room \xB7 video model":"My little house",Je=t.id,Xn()}function ni(){return yt.items.find(i=>i.id===Je)}function Tr(){let i=Mr.get(Je);zo.visible=!!i&&mn==="decorate",i&&(i.updateMatrixWorld(!0),zo.box.setFromObject(i),zo.material.color.set(rc(ni(),yt.items).some(t=>t.startsWith("Overlaps"))?"#d06c51":"#3f7c59")),rt("#inspector").hidden=!i||mn!=="decorate"}function gc(i){Je=i,Tr(),Yo()}function ws(i){let t=ni();t&&(Wn(),i(t),yt.preset="custom",Xn())}function Yo(){let i=ni(),t=rt("#inspector");if(t.hidden=!i||mn!=="decorate",!i)return;let e=Ee[i.type],n=rc(i,yt.items);t.innerHTML=`<div class="inspector-head"><div><span class="eyebrow">SELECTED OBJECT</span><h3>${e.name}</h3></div><button id="closeInspector" class="icon-btn" aria-label="Deselect">${xi("close")}</button></div><div class="row"><label class="field-label">X \xB7 metres<input id="objectX" type="number" min="-6" max="6" step=".1" value="${i.x.toFixed(2)}"></label><label class="field-label">Z \xB7 metres<input id="objectZ" type="number" min="-6" max="6" step=".1" value="${i.z.toFixed(2)}"></label></div><div class="row"><label class="field-label">Width<input id="objectW" type="number" min=".1" max="4" step=".05" value="${i.w.toFixed(2)}"></label><label class="field-label">Depth<input id="objectD" type="number" min=".1" max="4" step=".05" value="${i.d.toFixed(2)}"></label><label class="field-label">Height<input id="objectH" type="number" min=".01" max="3" step=".05" value="${i.h.toFixed(2)}"></label></div><label class="field-label">Rotation \xB7 degrees<input id="objectRotation" type="number" step="15" value="${Math.round(i.rot*180/Math.PI)}"></label><div class="swatches">${["#d9d7c8","#c6ac83","#a7b7a0","#425956","#343b3b","#d7a681","#eeeeea"].map(s=>`<button class="${i.color===s?"active":""}" style="background:${s}" data-color="${s}" title="Colour ${s}" aria-label="Colour ${s}"></button>`).join("")}<input id="customColor" type="color" value="${i.color}" aria-label="Custom colour" style="width:27px;height:27px;border:0;padding:0"></div>${e.kind==="sofabed"?`<button id="sofaToggle" class="btn wide secondary">${i.open?"Fold into sofa":"Unfold into bed"}</button>`:""}<div class="button-row"><button id="rotateObject" class="btn secondary" title="Rotate 90 degrees">${xi("rotate")}90\xB0</button><button id="duplicateObject" class="icon-btn" title="Duplicate" aria-label="Duplicate">${xi("copy")}</button><button id="deleteObject" class="icon-btn danger" title="Delete" aria-label="Delete">${xi("trash")}</button></div>${n.length?n.map(s=>`<p class="warning">${s}</p>`).join(""):'<p class="good">\u2713 No object or wall overlap detected.</p>'}<p>Dimensions include the model frame. Resize to match your actual furniture. Arrow keys nudge by ${Yi?"10":"2"} cm.</p>`,rt("#closeInspector").onclick=()=>gc(null);for(let[s,r,o,a]of[["objectX","x",-6,6],["objectZ","z",-6,6],["objectW","w",.1,4],["objectD","d",.1,4],["objectH","h",.01,3]])rt("#"+s).onchange=c=>{let l=Number(c.target.value);if(!Number.isFinite(l)||l<o||l>a){ye(`Use a value from ${o} to ${a}.`),Yo();return}ws(h=>h[r]=l)};rt("#objectRotation").onchange=s=>{let r=Number(s.target.value);Number.isFinite(r)&&ws(o=>o.rot=(r%360+360)%360*Math.PI/180)},Be("[data-color]").forEach(s=>s.onclick=()=>ws(r=>r.color=s.dataset.color)),rt("#customColor").onchange=s=>ws(r=>r.color=s.target.value),rt("#rotateObject").onclick=()=>lp(),rt("#duplicateObject").onclick=Jy,rt("#deleteObject").onclick=cp,rt("#sofaToggle")&&(rt("#sofaToggle").onclick=()=>ws(s=>s.open=!s.open))}function lp(){ws(i=>i.rot=(i.rot+Math.PI/2)%(Math.PI*2))}function Jy(){if(!ni()||yt.items.length>=180)return;Wn();let i={...ni(),id:No(),x:Math.min(6,ni().x+.35),z:Math.min(6,ni().z+.35)};yt.items.push(i),Je=i.id,Xn(),ye("Duplicated. Move the new item into place.")}function cp(){Je&&(Wn(),yt.items=yt.items.filter(i=>i.id!==Je),Je=null,Xn(),ye("Object removed. Undo is available."))}var _c=new xo,jf=new ut,Ky=new sn(new I(0,1,0),-Tt),jy=new I;function yu(i){let t=Ae.domElement.getBoundingClientRect();jf.set((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1),_c.setFromCamera(jf,Xe)}function xc(i){return yu(i),_c.ray.intersectPlane(Ky,jy)?.clone()}function hp(i){yu(i);let t=_c.intersectObjects([...Mr.values()],!0);for(let e of t){let n=e.object;for(;n&&!n.userData.itemId;)n=n.parent;if(n)return n.userData.itemId}return null}Ae.domElement.addEventListener("pointerdown",i=>{if(i.button===0&&(Hn={x:i.clientX,y:i.clientY,id:i.pointerId},mn==="decorate"&&!yi)){let t=hp(i);if(t){gc(t);let e=xc(i),n=ni();e&&(wn={id:t,dx:n.x-e.x,dz:n.z-e.z,started:!1},me.enabled=!1,Ae.domElement.setPointerCapture(i.pointerId));return}}},!0);Ae.domElement.addEventListener("pointermove",i=>{if(!wn||!Hn||Math.hypot(i.clientX-Hn.x,i.clientY-Hn.y)<4&&!wn.started)return;wn.started||(Wn(),wn.started=!0,En(!1));let t=xc(i),e=ni();if(!t||!e)return;let n=Yi?.1:.01;e.x=Math.max(-6,Math.min(6,Math.round((t.x+wn.dx)/n)*n)),e.z=Math.max(-6,Math.min(6,Math.round((t.z+wn.dz)/n)*n)),Mr.get(e.id).position.set(e.x,We(e.x,e.z)+.015,e.z),Tr()});Ae.domElement.addEventListener("pointerup",i=>{if(i.button!==0)return;let t=Hn&&Math.hypot(i.clientX-Hn.x,i.clientY-Hn.y)>5;if(wn){wn.started&&(yt.preset="custom",Xn(!1)),wn=null,me.enabled=!0,Hn=null;return}if(!t&&Hn){let e=xc(i);yi&&e?Qy(e):mn==="simulate"&&e?ev({x:e.x,z:e.z}):mn==="decorate"&&gc(hp(i))}Hn=null});Ae.domElement.addEventListener("pointercancel",()=>{wn?.started&&Xn(!1),wn=null,me.enabled=!0,Hn=null});window.addEventListener("keydown",i=>{if(!(/INPUT|TEXTAREA|SELECT/.test(i.target.tagName)||document.querySelector("dialog[open]"))){if((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"){i.preventDefault(),i.shiftKey?pu():rp();return}if((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="y"){i.preventDefault(),pu();return}if(i.key==="Escape"){gc(null),document.body.classList.contains("presentation")&&Mu(!1),yi&&fp();return}if(!(mn!=="decorate"||!ni())&&(i.key.toLowerCase()==="r"&&lp(),(i.key==="Delete"||i.key==="Backspace")&&(i.preventDefault(),cp()),i.key.startsWith("Arrow"))){i.preventDefault();let t=Yi?.1:.02;ws(e=>{i.key==="ArrowLeft"&&(e.x=Math.max(-6,e.x-t)),i.key==="ArrowRight"&&(e.x=Math.min(6,e.x+t)),i.key==="ArrowUp"&&(e.z=Math.max(-6,e.z-t)),i.key==="ArrowDown"&&(e.z=Math.min(6,e.z+t))})}}});function Cs(i){for(;i.children.length;){let t=i.children[0];i.remove(t),t.userData.disposable&&(t.geometry?.dispose(),t.material?.map?.dispose(),t.material?.dispose())}}function Ho(i,t,e="#58845e",n=!1){let s=new Te().setFromPoints(t.map(a=>new I(...a))),r=n?new mo({color:e,dashSize:.1,gapSize:.07,depthTest:!1}):new Fn({color:e,depthTest:!1}),o=new Di(s,r);return o.userData.disposable=!0,o.renderOrder=10,n&&o.computeLineDistances(),i.add(o),o}function up(i,t,e,n,s,r=1){let o=document.createElement("canvas");o.width=512,o.height=128;let a=o.getContext("2d");a.fillStyle="#f9fcf5",a.beginPath(),a.roundRect(3,5,506,116,22),a.fill(),a.fillStyle="#294b3d",a.font="500 49px Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(t,256,65);let c=new os(o);c.colorSpace=ke;let l=new jr(new ir({map:c,depthTest:!1,transparent:!0}));return l.position.set(e,n,s),l.scale.set(1.2*r,.3*r,1),l.renderOrder=20,l.userData.disposable=!0,i.add(l),l}function Oo(i,t,e){Ho(bi,[i,t]);for(let n of[i,t])Ho(bi,[[n[0]-.06,n[1],n[2]-.06],[n[0]+.06,n[1],n[2]+.06]]);up(bi,e,(i[0]+t[0])/2,.5,(i[2]+t[2])/2,.85)}function dp(){Cs(bi),Cs(Vo);let i=yt.structure,t=i.bounds,e=i.bathroom;Oo([t.left,.43,t.front+.88],[t.right,.43,t.front+.88],`${(t.right-t.left).toFixed(2)} m`),Oo([t.right+.7,.43,t.back],[t.right+.7,.43,t.front],`${(t.front-t.back).toFixed(2)} m`),e.enabled!==!1&&(Oo([e.x-e.w/2-.36,.43,e.z-e.d/2],[e.x-e.w/2-.36,.43,e.z+e.d/2],`${e.d.toFixed(2)} m`),Oo([e.x-e.w/2,.43,e.z+e.d/2+.28],[e.x+e.w/2,.43,e.z+e.d/2+.28],`${e.w.toFixed(2)} m`)),i.balcony.enabled!==!1&&Oo([t.left,.43,t.back-i.balcony.depth-.35],[t.right,.43,t.back-i.balcony.depth-.35],`${(t.right-t.left).toFixed(2)} m balcony`);for(let n of i.openings.filter(s=>s.kind==="door")){let s=ae(i,n.side),r=s.axis==="x"?n.at:s.fixed,o=s.axis==="x"?s.fixed:n.at,a=s.axis==="x"?n.w:.58,c=s.axis==="x"?.58:n.w;Ho(Vo,[[r-a/2,Tt+.019,o-c/2],[r+a/2,Tt+.019,o-c/2],[r+a/2,Tt+.019,o+c/2],[r-a/2,Tt+.019,o+c/2],[r-a/2,Tt+.019,o-c/2]],"#bb9561",!0)}}var vr=[];function fp(){yi=!yi,rt("#measureBtn").classList.toggle("active",yi),rt("#measureReadout").hidden=!yi,vr=[],Cs(br),rt("#measureReadout").textContent="Click two points on the floor.",Ae.domElement.style.cursor=yi?"crosshair":""}function Qy(i){vr.length===2&&(vr=[],Cs(br)),i.y=Tt+.035,vr.push(i);let t=new oe(new fo(.035,12,8),new Pi({color:"#285747",depthTest:!1}));if(t.position.copy(i),t.userData.disposable=!0,br.add(t),vr.length===2){let[e,n]=vr,s=e.distanceTo(n);Ho(br,[e.toArray(),n.toArray()],"#285747"),up(br,s.toFixed(2)+" m",(e.x+n.x)/2,.52,(e.z+n.z)/2),rt("#measureReadout").textContent=`${s.toFixed(2)} m floor distance \xB7 click to start again`}}dp();function Tn(i,t){rt("#personStatus").textContent=i,rt("#personDetail").textContent=t||"Click the floor to walk somewhere."}function En(i=!0){let t=Yt.action;t?.item&&Yt.phase!=="walking"&&Yt.phase!=="idle"&&ue.root.position.set(t.x,We(t.x,t.z)+.015,t.z),Yt={path:[],index:0,action:null,phase:"idle",elapsed:0,transition:null,routine:!1,routineIndex:0,wait:0},Cs(qi),ue.reset();let e=Go();ue.root.position.y=We(e.x,e.z)+.015,(i||mn==="simulate")&&(Rs(),Tn("Ready to explore"))}function pp(){En(!1),ue.root.position.set(0,Tt+.015,yt.structure.room?.kind==="video-bedroom"?.45:1.3),ue.root.rotation.y=0,Rs(),Tn("Ready to explore")}function Rs(){let i=Go(),t=iu(yt.items,As),e=nu(As),n=yt.structure,s=n.bounds,r=n.room?.kind==="video-bedroom",o=l=>l.x>s.left+e&&l.x<s.right-e&&l.z>s.back+e&&l.z<s.front-e&&We(l.x,l.z)>=Tt-.03;if(!Uo(i.x,i.z,t,e)&&(!r||o(i)))return;let a=r?[{x:0,z:.45},{x:s.left+.9,z:s.front-.6}]:[{x:0,z:1.3},{x:0,z:2},{x:0,z:3.5}];for(let l=r?s.back+.4:-2;l<(r?s.front-.3:2);l+=.2)for(let h=r?s.left+.4:-2;h<(r?s.right-.3:2);h+=.2)a.push({x:h,z:l});let c=a.find(l=>(!r||o(l))&&!Uo(l.x,l.z,t,e));c&&ue.root.position.set(c.x,We(c.x,c.z)+.015,c.z)}function tv(i){if(Cs(qi),qi.visible=rt("#pathToggle").checked,!i?.length)return;Ho(qi,i.map(n=>[n.x,We(n.x,n.z)+.035,n.z]),"#397b5e",!0);let t=i[i.length-1],e=new oe(new uo(.12,.16,32),new Pi({color:"#4d8d68",side:Pe,depthTest:!1}));e.rotation.x=-Math.PI/2,e.position.set(t.x,We(t.x,t.z)+.04,t.z),e.userData.disposable=!0,qi.add(e)}function mp(i,t=null,e=!1){let n=Yt.routine,s=Yt.routineIndex;ue.reset(),Yt={path:i,index:0,action:t,phase:"walking",elapsed:0,transition:null,routine:e&&n,routineIndex:s,wait:0},tv(i),Tn("Walking\u2026",t?.label||"Finding a little breathing room.")}function ev(i){En(!1),Rs();let t=oc(Go(),i,yt.items,As);if(!t){ye("No walkable route there. Try a clear floor area or move the blocking furniture."),Tn("That spot is blocked","Try another spot, or make more room.");return}mp(t)}function vu(i,t=!1){if(i==="tour"){En(!1),Yt.routine=!0,Yt.routineIndex=0,vu("desk",!0);return}if(t?(ue.reset(),Rs()):En(!1),i==="bed"){let r=yt.items.find(o=>Ee[o.type].kind==="sofabed");r&&!r.open&&!yt.items.some(o=>["bed","loft"].includes(Ee[o.type].kind))&&(Wn(),r.open=!0,Wo(),Xo(),wr())}let e=su(i,yt.items);if(!e.length){ye(`Add ${i==="bed"?"a bed":"a desk"} first.`),Tn("Destination not available"),Yt.routine=!1;return}let n=null,s=null;for(let r of e){let o=oc(Go(),r,yt.items,As);o&&(!s||o.length<s.length)&&(n=r,s=o)}if(!s){ye("Route blocked. Move furniture, resize it, or check the door clearances."),Tn("Cannot reach "+i,"The walking route is blocked."),Yt.routine=!1;return}mp(s,n,t)}function nv(){Yt.phase="rest",Yt.elapsed=0,Yt.path=[],Cs(qi);let i=Yt.action;if(!i){Tn("Arrived");return}if(i.pose==="sleep"&&i.item){let t=yt.items.find(r=>r.id===i.item.id);if(!t){En();return}let e=Ee[t.type].kind,n=kn(t,0,e==="sofabed"?.65*t.d/Ee[t.type].d:0),s=e==="loft"?t.h*1.88/2.25:e==="sofabed"?t.h*.45/.84:t.h*.55/Ee[t.type].h;Yt.phase="settle",Yt.transition={from:ue.root.position.clone(),to:new I(n.x,We(n.x,n.z)+s+.1,n.z),yaw:t.rot,pose:"sleep",loft:e==="loft",duration:e==="loft"?2.8:1.1},Tn(e==="loft"?"Climbing up\u2026":"Getting comfortable\u2026","A simplified pose transition; not an ergonomic test.")}else if(i.pose==="sit"&&i.item){let t=i.item;Yt.phase="settle",Yt.transition={from:ue.root.position.clone(),to:new I(t.x,We(t.x,t.z)+.015,t.z),yaw:t.rot,pose:"sit",duration:.85},Tn("Taking a seat\u2026")}else Tn(i.label),Yt.wait=0}function iv(i,t){let e=ue.root;if(e.scale.setScalar(As/1.7),Yt.phase==="walking"){let o=i*.92;for(;o>0&&Yt.index<Yt.path.length;){let a=Yt.path[Yt.index],c=a.x-e.position.x,l=a.z-e.position.z,h=Math.hypot(c,l);if(h<.001){Yt.index++;continue}e.rotation.y=Math.atan2(c,l);let u=Math.min(o,h);e.position.x+=c/h*u,e.position.z+=l/h*u,o-=u,u>=h-1e-4&&Yt.index++}e.position.y=We(e.position.x,e.position.z)+.015,ue.legs[0].rotation.x=Math.sin(t*9)*.32,ue.legs[1].rotation.x=-Math.sin(t*9)*.32,ue.arms[0].rotation.x=-Math.sin(t*9)*.31,ue.arms[1].rotation.x=Math.sin(t*9)*.31,ue.body.position.y=Math.abs(Math.sin(t*9))*.018,Yt.index>=Yt.path.length&&(ue.reset(),nv())}else if(Yt.phase==="settle"){let o=Yt.transition;Yt.elapsed+=i;let a=Math.min(1,Yt.elapsed/o.duration),c=a*a*(3-2*a);if(e.rotation.y=o.yaw,e.position.lerpVectors(o.from,o.to,c),o.pose==="sleep"){let l=o.loft?Math.max(0,(a-.65)/.35):c;ue.body.rotation.x=-Math.PI/2*l,ue.body.position.z=.72*l,ue.body.position.y=0}else{ue.body.position.y=-.32*c;for(let l of ue.legs)l.rotation.x=-Math.PI/2*c;for(let l of ue.arms)l.rotation.x=-.6*c}a===1&&(Yt.phase="rest",Yt.wait=0,Tn(o.pose==="sleep"?"Resting on the bed":"Working at the desk",o.pose==="sleep"?"Stop / stand up to get moving again.":"Taking a seat, six-block style."))}else if(Yt.phase==="rest"&&Yt.routine&&(Yt.wait+=i,Yt.wait>3)){let o=yt.structure.room?["desk","bed","entrance"]:["desk","bathroom","balcony","bed","entrance"];Yt.routineIndex=(Yt.routineIndex+1)%o.length;let a=Yt.action;a&&(ue.reset(),e.position.set(a.x,We(a.x,a.z)+.015,a.z)),vu(o[Yt.routineIndex],!0)}let n=e.position.x,s=e.position.z,r=Math.min(1,i*5);for(let o of yt.structure.openings.filter(a=>a.kind==="door")){let a=Ge.doorLeaves[o.id];if(!a)continue;let c=ae(yt.structure,o.side),l=n-(c.axis==="x"?o.at:c.fixed),h=s-(c.axis==="x"?c.fixed:o.at),u=Math.hypot(l,h)<1.2;o.id==="front-door"&&o.w>=1.3?a.position.x=mr.lerp(a.position.x,u?o.w/2-.06:0,r):a.rotation.y=mr.lerp(a.rotation.y,u?-1.4:0,r)}if(ep&&mn==="simulate"&&Xe===Es){let a=new I(n,1,s).sub(me.target).multiplyScalar(i*2.1);me.target.add(a),Xe.position.add(a)}}function sv(){Rs();let i=Go(),t=["bed","desk","bathroom","balcony","entrance"].map(e=>{let n=su(e,yt.items),s=n.some(r=>oc(i,r,yt.items,As));return{name:e,pass:s,exists:!!n.length}});return rt("#pathResults").innerHTML=t.map(e=>`<div><span>${e.name[0].toUpperCase()+e.name.slice(1)}</span><b class="${e.pass?"pass":"fail"}">${e.pass?"\u2713 Reachable":e.exists?"Blocked":"Not placed"}</b></div>`).join(""),ye("Access checked from Blocky\u2019s current position."),t}function gp(){let i=new Blob([JSON.stringify(yt,null,2)],{type:"application/json"});_p(i,"House-Studio-Layout.json"),ye("Layout exported. Keep this file as your portable backup.")}function _p(i,t){let e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e4)}function xp(){let i=tp("house-studio-layouts-v1",[]);return Array.isArray(i)?i:[]}function bu(){let i=xp();rt("#savedLayouts").innerHTML=i.length?i.map((t,e)=>`<div class="saved-layout"><button data-load="${e}">${Sr(t.name)}<small>${t.items?.length||0} objects</small></button><button class="icon-btn" data-remove-save="${e}" title="Delete saved copy" aria-label="Delete ${Sr(t.name)}">${xi("trash")}</button></div>`).join(""):'<div class="empty-copy">No named copies yet.</div>',Be("[data-load]").forEach(t=>t.onclick=()=>{try{let e=Gi(i[Number(t.dataset.load)]);e.structure||(e.structure=Wi()),Wn(),yt=e,Je=null,Xn(),rt("#layoutsDialog").close(),ye("Saved layout loaded.")}catch(e){ye(e.message)}}),Be("[data-remove-save]").forEach(t=>t.onclick=()=>{confirm("Remove this named copy? Your current layout stays unchanged.")&&(i.splice(Number(t.dataset.removeSave),1),mu("house-studio-layouts-v1",i),bu())})}function Mu(i){document.body.classList.toggle("presentation",i),rt("#exitPresent").hidden=!i,Je=null,Tr(),rt("#sidebar").classList.remove("mobile-open"),mc()}function rv(){Ae.render(Oe,Xe),Ae.domElement.toBlob(i=>{i&&_p(i,"House-Studio-View.png")}),ye("Scene image saved.")}Be("[data-mode]").forEach(i=>i.onclick=()=>Wy(i.dataset.mode));Be("[data-light]").forEach(i=>i.onclick=()=>gu(i.dataset.light));Be("[data-view]").forEach(i=>i.onclick=()=>qo(i.dataset.view));Be("[data-action]").forEach(i=>i.onclick=()=>vu(i.dataset.action));rt("#roofBtn").onclick=()=>{pn=!pn,pn&&xe==="hidden"&&(xe="full",rt("#wallSelect").value=xe),ii()};rt("#wallSelect").onchange=i=>{xe=i.target.value,ii()};rt("#fitBtn").onclick=()=>qo("iso");rt("#lightsToggle").onchange=_u;rt("#gardenToggle").onchange=i=>Ge.garden.visible=i.target.checked;rt("#measureBtn").onclick=fp;rt("#dimensionBtn").onclick=()=>{bi.visible=!bi.visible,rt("#dimensionBtn").classList.toggle("active",bi.visible)};rt("#undoBtn").onclick=rp;rt("#redoBtn").onclick=pu;rt("#snapToggle").onchange=i=>{Yi=i.target.checked,Is.visible=mn==="decorate"&&Yi,Yo()};rt("#searchInput").oninput=xu;rt("#heightInput").oninput=i=>{As=Number(i.target.value)/100,rt("#heightLabel").textContent=i.target.value+" cm",En()};rt("#followToggle").onchange=i=>ep=i.target.checked;rt("#pathToggle").onchange=i=>qi.visible=i.target.checked;rt("#stopPerson").onclick=()=>{let i=Yt.action;i?.item&&Yt.phase!=="walking"&&ue.root.position.set(i.x,We(i.x,i.z)+.015,i.z),En()};rt("#resetPerson").onclick=pp;rt("#checkPaths").onclick=sv;rt("#cameraTourBtn").onclick=()=>{Xe===vi&&qo("iso"),Bo=!Bo,rt("#cameraTourBtn").innerHTML=xi(Bo?"pause":"play")};rt("#screenshotBtn").onclick=rv;rt("#helpBtn").onclick=()=>rt("#helpDialog").showModal();rt("#referenceBtn").onclick=()=>{rt("#helpDialog details").open=!yt.structure.room,rt("#helpDialog").showModal()};Be("[data-close]").forEach(i=>i.onclick=()=>i.closest("dialog").close());Be("dialog").forEach(i=>i.addEventListener("click",t=>{if(t.target===i){let e=i.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&i.close()}}));rt("#saveBtn").onclick=()=>{bu(),rt("#layoutsDialog").showModal()};rt("#saveLayoutForm").onsubmit=i=>{i.preventDefault();let t=rt("#layoutName").value.trim();if(!t)return;let e=xp();if(e.length>=25){ye("Export or remove a saved copy before adding more (limit 25).");return}let n=JSON.parse(JSON.stringify({...yt,name:t}));e.push(n),mu("house-studio-layouts-v1",e)?(bu(),ye("Named copy saved.")):ye("Browser storage is full or unavailable. Export JSON instead.")};rt("#exportBtn").onclick=gp;rt("#downloadLayoutBtn").onclick=gp;rt("#importBtn").onclick=()=>rt("#importFile").click();rt("#importFile").onchange=async i=>{let t=i.target.files[0];if(i.target.value="",!!t){if(t.size>2e6){ye("Layout file is too large (maximum 2 MB).");return}try{let e=Gi(JSON.parse(await t.text()));Wn(),yt=e,Je=null,Xn(),rt("#layoutsDialog").close(),ye("Layout imported.")}catch(e){ye("Import stopped: "+e.message)}}};rt("#presentBtn").onclick=()=>Mu(!0);rt("#exitPresent").onclick=()=>Mu(!1);rt("#mobilePanelBtn").onclick=()=>rt("#sidebar").classList.toggle("mobile-open");function yp(i,t){let e={front:0,back:Math.PI,left:-Math.PI/2,right:Math.PI/2},n=(e[t.side]||0)-(e[i.side]||0),s=Math.abs(Math.sin(n))>.5;for(let r of yt.items)if(r.x>=i.x-i.w/2&&r.x<=i.x+i.w/2&&r.z>=i.z-i.d/2&&r.z<=i.z+i.d/2){let o=kn({x:0,z:0,rot:n},r.x-i.x,r.z-i.z);r.x=t.x+o.x*t.w/(s?i.d:i.w),r.z=t.z+o.z*t.d/(s?i.w:i.d),r.rot=((r.rot+n)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)}}function vp(i,t){let e=i.bathroom,n=t.bathroom;if(e.side===n.side)for(let s of t.openings){if(!s.side.startsWith("bath-"))continue;let r=i.openings.find(a=>a.id===s.id&&a.side===s.side);if(!r)continue;let o=ae(t,s.side);s.at=o.axis==="x"?n.x+(r.at-e.x)*n.w/e.w:n.z+(r.at-e.z)*n.d/e.d}}function Su(i){let t=yt.structure,e=JSON.parse(JSON.stringify(t));try{i(e),Do(e),JSON.stringify(t.bathroom)!==JSON.stringify(e.bathroom)&&vp(t,e);let n=Gi({...yt,structure:e}).structure;return Wn(),yt.structure=n,JSON.stringify(t.bathroom)!==JSON.stringify(n.bathroom)&&yp(t.bathroom,n.bathroom),yt.preset="custom",Xn(),!0}catch(n){return ye(n.message),wu(),!1}}function ov(i,t,e){let n=JSON.parse(JSON.stringify(yt.structure)),s=yt.structure,r=Yi?.1:.01,o=f=>Math.round(Math.max(-5.5,Math.min(5.5,f))/r)*r,a=s.openings.find(f=>f.id===i);if(a){let f=ae(s,a.side),d=f.start+a.w/2+.1,m=f.end-a.w/2-.1;a.at=Math.max(d,Math.min(m,o(f.axis==="x"?t:e)));return}let c=s.partitions.find(f=>f.id===i);if(c){c.x=o(t),c.z=o(e);return}let l=Re.find(f=>i===f+"-wall");if(!l)return;let h=s.bounds,u=o(l==="left"||l==="right"?t:e);h[l]=l==="left"?Math.min(u,h.right-2):l==="right"?Math.max(u,h.left+2):l==="back"?Math.min(u,h.front-2):Math.max(u,h.back+2),Do(s),vp(n,s),yp(n.bathroom,s.bathroom)}function wu(){bp.render()}var bp=Zf({$:rt,$$:Be,escapeHTML:Sr,scene:Oe,renderer:Ae,controls:me,ray:yu,raycaster:_c,pointAt:xc,cloneStructure:()=>yt.structure.room?eu("video-room").structure:Wi(),toast:ye,view:qo,edit:Su,checkpoint:Wn,commit:Xn,rebuildStructure:pc,moveStructure:ov,getState:()=>yt,getHouse:()=>Ge,getMode:()=>mn,getMeasure:()=>yi,getSnap:()=>Yi});Be("[data-keep-wall]").forEach(i=>i.onclick=()=>{xe="cutaway",Su(t=>{for(let e of Bn)t.wallVisibility[e]=e===i.dataset.keepWall||e==="bath-"+i.dataset.keepWall?"full":"hidden";for(let e of t.partitions)t.wallVisibility[e.id]="low"})});if(document.modelContext?.registerTool){let i=new AbortController;window.addEventListener("pagehide",()=>i.abort(),{once:!0});for(let t of[{name:"read_house_layout",description:"Read the current house layout and furniture dimensions in metres.",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>JSON.parse(JSON.stringify(yt))},{name:"load_house_preset",description:"Replace furniture with a starting preset, keeping the change available in undo.",inputSchema:{type:"object",properties:{preset:{type:"string",enum:Ms.map(e=>e.id)}},required:["preset"],additionalProperties:!1},execute:e=>{if(!e||!Ms.some(n=>n.id===e.preset))throw new Error("Unknown preset.");return ap(e.preset),{name:yt.name,objects:yt.items.length}}}])try{Promise.resolve(document.modelContext.registerTool(t,{signal:i.signal})).catch(()=>{})}catch{}}Wo();Yy();ii();gu("day");wr();mc();yt.structure.room&&(Es.position.set(1.4,5.8,7.9),me.target.set(0,.85,-.12));me.update();Xo();var Qf=new _o;function Mp(){requestAnimationFrame(Mp);let i=Math.min(Qf.getDelta(),.05),t=Qf.elapsedTime;if(ei){ei.t+=i;let e=Math.min(1,ei.t/.65),n=e*e*(3-2*e);Xe.position.lerpVectors(ei.from,ei.to,n),me.target.lerpVectors(ei.targetFrom,ei.targetTo,n),e===1&&(ei=null)}me.autoRotate=Bo,me.autoRotateSpeed=.6,me.update(i),mn==="simulate"&&iv(i,t),Ae.render(Oe,Xe)}Mp();rt("#loading").hidden=!0;window.addEventListener("error",i=>{console.error(i.error),ye("Something went wrong. Export your layout, then reload the page.")});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
