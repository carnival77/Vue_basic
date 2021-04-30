// other1.js의 자원 사용

import {num, func1} from './other1.js' // {} : export 로 노출된 것을 import할 때
import func2 from './other2.js' // {} 없이 : export default로 노출된 것을 import 할 때
import other3_json from './other3.js'
import other4_json from './other4.js'

console.log(num);
func1();
func2();
console.log(other3_json);
console.log(other4_json);