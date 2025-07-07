/* TypeScript 사용하는 이유는 코드의 안정성과 유지보수성을 높이려고 사용합니다
any , unknown 을 남용 악마유혹
변수가 가질 수 있는 타입을 최대한 구체적으로 명시하려는 습관을 들이는 것이 중요합니다.
union 타입과 같은 기능을 적극적으로 활용하여 불필요한 타입 오류를 방지하고,
더 견고하고 예측 가능한 코드를 작성
*/

/*
1. boolean
boolean 타입은 참(true) 또는 거짓(false) 두 가지 값만을 나타냅니다.
주로 조건문(예: if 문), 비교 연산 (예: a === b), 그리고 어떤 상태의 유효성 검사 등에서 사용됩니다.
2가지 상태 (예/아니오, 활성/비활성 등)를 표현할 때는 boolean을 사용해야 해요!
3가지 이상의 상태를 표현하고 싶다면 enum이나 string 또는 다른 복합 타입을 사용해야 합니다
*/

function checkUserStatus(isLoggedIn: boolean): string {
  if (isLoggedIn) {
    return "사용자가 로그인되어 있습니다.";
  } else {
    return "사용자가 로그인되어 있지 않습니다.";
  }
}

const currentUserLoggeIn: boolean = true;
const message = checkUserStatus(currentUserLoggeIn);
console.log(message);
const guestUserLoggedIn: boolean = false;
console.log(checkUserStatus(guestUserLoggedIn));

/*
2. number
number 타입은 TypeScript에서 모든 종류의 숫자를 나타냅니다.
일반적인 프로그래밍 언어에서는 정수(integer)와 실수(float/double)를 구분하여 다른 타입을 사용하지만, TypeScript에서는 number 타입 하나로 이 모든 것을 처리합니다.
심지어 2진수, 8진수, 16진수 리터럴까지도 number 타입으로 표현할 수 있어요.
모든 수치 연산에 사용되는 값은 number 타입으로 명시해주세요.
*/

function calculateDiscountPrice(
  originalPrice: number,
  discountRate: number
): number {
  return originalPrice * (1 - discountRate);
}

const productPrice: number = 12500.5;
const discount: number = 0.15;
const finalPrice = calculateDiscountPrice(productPrice, discount);
console.log(
  `원가 ${productPrice}원에서 ${
    discount * 100
  }% 할인된 가격: ${finalPrice.toFixed(2)}원`
);

const hexValue: number = 0xff;
console.log(hexValue);

/*
3. string
string 타입은 텍스트 데이터를 나타냅니다. 작은따옴표(' '), 큰따옴표(" "), 또는 백쿼트(`)를 사용하여 문자열을 표현할 수 있습니다.
특히 백쿼트(`)는 ES6부터 도입된 템플릿 리터럴(Template literals)을 사용할 때 쓰이며, 문자열 내부에 변수나 표현식을 쉽게 삽입할 수 있도록 해줍니다. string 타입은 텍스트를 조작하거나, 다른 텍스트와 합치거나, 특정 문자열을 찾고 대체하는 등 다양한 텍스트 관련 작업에 활용됩니다.
*/

function generateWelcomeMessage(userName: string, appName: string): string {
  return `안녕하세요, ${userName}님! ${appName}에 오신 것을 환영합니다!`;
}

const user: string = "홍길동";
const app: string = "TypeScript 시작";
const welcomeMessage = generateWelcomeMessage(user, app);
console.log(welcomeMessage);

const oldWayMessage: string =
  "안녕하세요, " + user + "님! " + app + "에 오신 것을 환영합니다!";
console.log(oldWayMessage);

/*
4. Array
- 배열은 같은 타입의 여러 원소들을 순서대로 저장하는 자료구조!!!
- 특정 타입 뒤에 [] 를 붙여서 명시
 */

function calculateAverage(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  let sum: number = 0;
  for (const grade of grades) {
    sum += grade;
  }

  return sum / grades.length;
}

const studentGrades: number[] = [88, 92, 75, 95, 80];
const averageGrade = calculateAverage(studentGrades);
console.log(`Student's Average score" ${averageGrade.toFixed(2)}`);
const fruits: string[] = ["사과", "바나나", "오렌지"];
console.log(fruits);

/*
5. 튜플 ( Tuple )
- 튜플은 서로 다른 타입의 원소들을 정해진 순서와 개수에 맞게 가질 수 있는 특수한 형태의 배열
- 각 위치에 올 수 있는 원소의 타입을 미리 명확하게 정의해야 합니다.

튜플하고 배열의 차이
가장 큰 차이는 원소의 타입 규칙!

배열 =>
string[] => string 만 넣을 수 있음!
튜플
[string, string, number] 각 위치에 오는 타입이 다를 수 있음, 다만 순서와 개수를 미리 지정해야함
 */

const userInfo: [string, number, boolean] = ["이순신", 35, true];
console.log(`이름: ${userInfo[0]}, 나이: ${userInfo[1]}, 활성: ${userInfo[2]}`);

/*
6. enum
- enum은 열거형 데이터 타입이라고 불림
- 관련된 상수값의 집합에 의미있는 이름을 부여하여 코드를 더 쉽게 관리할 수 있게 만들어주는 타입
- enum 내부의 각 요소는 별로 설정 값을 지정하지 않으면, 0으로 시작함
- enum에는 숫자, string
- enum은 명확하게 관련된 상수 값들을 그룹화하여 코드를 더 읽기 쉽게 만들고 싶을 때 사용하는 것이 좋습니다.
- 하지만 값의 수가 적거나, 값들 사이의 관계가 뚜렷하지 않으면 string 리터럴 유니온 타입 등을 고려하는 것이 더 나을 수 있습니다.
 */

enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "USER",
}

enum DayOfWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATERDAY,
}
const today: DayOfWeek = DayOfWeek.MONDAY;

console.log(`현재 요일: ${DayOfWeek} (${DayOfWeek.MONDAY})`);

/*
7. readonly
- readonly 키워드는 TypeScript에서만 사용되는 키워드입니다.
- 클래스의 속성(Property)이나 인터페이스의 속성을 불변(Immutable)으로 만들 때 사용
- readonly로 선언된 속성은 생성자(Constructor) 내부에서 한 번만 초기화될 수 있으며, 그 이후로는 값을 변경할 수 없습니다.
- const가 변수 자체의 재할당을 막는다면, readonly는 객체 속성의 재할당을 막는 데 특화되어 있습니다.
- const랑 readonly 모두 불변성을 보장하는데 사용함
 */

// class Product {
//   readonly productId: string;
//   productName: string;
//   price: number;

//   constructor(id: string, name: string, price: number) {
//     this.productId = id;
//     this.productName = name;
//     this.price = price;
//   }
// }

// const laptop = new Product("LAPTOP001", "최신형 노트북", 1500000);
// console.log(`제품 ID: ${laptop.productId}`);
// console.log(`제품명: ${laptop.productName}`);

// laptop.productName = "고급형 노트북"; // productName 속성 변경

// console.log(`변경 제품명: ${laptop.productName}`);

/*
8. any
- any 타입은 모든 타입의 슈퍼 타입
- any 타입으로 선언된 변수에는 어떤 타입의 값이든 저장할 수 있다는 의미
- JavaScript의 Object 타입처럼, 모든 값을 수용할 수 있는 '만능' 타입
- any 타입은 TypeScript의 타입 안정성을 포기하게 만드는 가장 위험한 도구
- any를 사용하면 TypeScript의 타입 검사 기능이 무력화되어, 잠재적인 런타임 오류를 컴파일 시점에 잡아내지 못하게 됩니다.
*/

let flexiblevalue: any;

flexiblevalue = 10;
console.log(flexiblevalue);

flexiblevalue = "자유로운 문자열";
console.log(flexiblevalue);

flexiblevalue = { id: 1, type: "data" };
console.log(flexiblevalue);

let num: number = flexiblevalue;
console.log(num);

/*
9. unknown
- unknown 타입은 any 타입과 비슷하게 모든 타입의 값을 저장할 수 있습니다.
- any와는 다르게 더 안전한 방식으로 동작
- unknown 타입의 변수에 할당된 값을 다른 특정 타입의 변수에 할당하거나, 그 값을 직접 사용하려면 명시적으로 타입이 무엇인지 확인
- 즉, 사용하기 전에 반드시 타입 체크를 하도록 강제하도록 만듦

10. union
- unknown 타입은 안전하게 타입을 다룰 수 있지만 결국 값을 사용할 때마다 매번 타입을 확인해야하는 번거로움
- union 타입은 변수가 여러 타입 중 하나를 가질 수 있도록 선언할 때 사용
- A 또는 B 또는 C와 같은 논리적 OR(|) 연산자처럼, 정의된 여러 타입 중 하나만 만족 OK
*/

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(`ID는 문자열입니다: ${id.toUpperCase()}`);
  } else {
    console.log(`ID는 숫자입니다: ${id.toFixed(2)}`);
  }
}

printId("spartan123");
printId(789012);

/*
- 타입 가드 (Type Guard)
- TypeScript는 코드를 실행하기 전에 타입 오류를 잡는 강력한 기능을 제공하지만,
- 때로는 런타임에 변수의 실제 타입을 확인하고 싶을 때가 있습니다.
- 이때 사용하는 것이 바로 **타입 가드 (Type Guard)**입니다.
- 타입 가드는 특정 스코프 내에서 변수의 타입을 좁히는(narrowing) 역할을 하여,
- 해당 타입의 속성이나 메서드를 안전하게 사용할 수 있도록 돕습니다.

- typeof
- 원시 타입(string, number, boolean, symbol, bigint, undefined)을 체크할 때 사용

- instanceof
- 특정 클래스의 인스턴스인지 확인할 때 사용
*/

class Car {
  drive() {
    console.log("자동차가 운전됩니다.");
  }
}

class Bicycle {
  pedal() {
    console.log("자전거 페달을 밟습니다.");
  }
}

function moveVehicle(vehicle: Car | Bicycle) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.pedal();
  }
}

/*
- in 연산자
- 객체에 특정 속성(property)가 존재하는지 확인할 때 사용
*/

interface Dog {
  bark(): void;
  breed: string;
}

interface Cat {
  meow(): void;
  purr: boolean;
}

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
    console.log(`품종: ${animal.breed}`);
  } else {
    animal.meow();
    console.log(`골골송 여부: ${animal.purr}`);
  }
}

const myDog: Dog = { bark: () => console.log("멍멍!"), breed: "골든 리트리버" };
const myCat: Cat = { meow: () => console.log("야옹~"), purr: true };

/*
- 사용자 정의 타입 가드
- 개발자가 직접 타입을 좁히는 함수를 정의
- 반환 타입에 parameter is Type 형태의 타입 프레디케이트(Type Predicate)를 사용
*/

interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}

/*
- 인터페이스
- 인터페이스는 TS에서 객체의 모양을 정의하는 도구
*/

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  readonly createdAt: Date;
}

const laptop: Product = {
  // 타입 자체가 Product
  id: 101,
  name: "울트라북",
  price: 150000,
  createdAt: new Date(),
};

const keyboard: Product = {
  id: 102,
  name: "기계식 키보드",
  price: 120000,
  description: "게이밍에 최적화된 키보드",
  createdAt: new Date(),
};

/*
- 함수 타입 인터페이스(Function Type Interface)
*/

interface SearchFunction {
  (source: string, subString: string): boolean;
}

let mySearch = function (src: string, sub: string): boolean {
  const result = src.indexOf(sub);
  return result > -1;
};

console.log(mySearch("안녕하세요 TypeScript", "Type"));

let anotherSearch: SearchFunction = function (
  text: string,
  keyword: string
): boolean {
  return text.includes(keyword);
};

console.log(anotherSearch("JavaScript는 재밌어!", "script"));

/*
- 인덱싱 가능 인터페이스 (Indexable Type Interface)
- 배열이나 객체처럼 인덱스를 통해 접근할 수 있는 타입의 모양을 정의할 때 사용
- 인덱스 시그니처: [index: IndexType]: ValueType 를 사용하여 정의하며, IndexType은 string 또는 number만 가능
*/

interface StringArray {
  [index: number]: string; // 숫자 인덱스를 통해 string 타입의 값을 가집니다. (배열 형태)
}

let myArray: StringArray;
myArray = ["Hello", "World"]; // StringArray 타입에 맞춰 문자열 배열을 할당합니다.
console.log(myArray[0]); // 인덱스 0으로 접근하여 "Hello"를 출력합니다.

interface Dictionary {
  [key: string]: string; // 문자열 키를 통해 string 타입의 값을 가집니다. (객체 형태)
}

let myDictionary: Dictionary = {
  name: "홍길동", // 'name' 키에 '홍길동' 문자열 값을 할당합니다.
  city: "서울", // 'city' 키에 '서울' 문자열 값을 할당합니다.
};
console.log(myDictionary["name"]); // 'name' 키로 접근하여 "홍길동"을 출력합니다.
myDictionary["country"] = "대한민국"; // 'country' 키에 "대한민국" 문자열 값을 할당합니다.
// Dictionary 인터페이스에 따라 동적으로 속성을 추가할 수 있습니다.

/*
- 인터페이스 상속 (Interface Extension)
- 인터페이스는 extends 키워드를 사용하여 다른 인터페이스의 정의를 상속(확장)받을 수 있습니다.
- 코드의 재사용성을 높이고, 관련된 인터페이스 간의 계층 구조를 명확히 하는 데 도움을 줍니다.
- 여러 인터페이스를 동시에 상속받는 것도 가능합니다.
*/

// 기본 인터페이스

// 기본 형태를 정의하는 인터페이스
interface Shape {
  color: string;
}

// Shape를 상속받아 radius 속성을 추가하는 Circle 인터페이스
interface Circle extends Shape {
  radius: number;
}

// Circle을 상속받아 borderWidth와 borderColor 속성을 추가하는 ColoredCircleWithBorder 인터페이스
interface ColoredCircleWithBorder extends Circle {
  borderWidth: number;
  borderColor: string;
}

// Circle 인터페이스 타입에 맞는 객체를 생성합니다.
// Circle은 Shape를 상속받았으므로 color 속성도 포함해야 합니다.
const myCircle: Circle = {
  color: "red", // Shape로부터 상속받은 속성
  radius: 5, // Circle에서 추가된 속성
};

// ColoredCircleWithBorder 인터페이스 타입에 맞는 객체를 생성합니다.
// 이 객체는 Shape, Circle, ColoredCircleWithBorder 인터페이스의 모든 속성을 포함해야 합니다.
const myComplexCircle: ColoredCircleWithBorder = {
  color: "blue", // Shape에서 상속
  radius: 10, // Circle에서 상속
  borderWidth: 2, // ColoredCircleWithBorder에서 추가
  borderColor: "black", // ColoredCircleWithBorder에서 추가
};

/*
- 타입 별칭 (Type Alias)
- 타입 별칭은 기존 타입에 새로운 이름(별칭)을 부여하는 데 사용
- type 키워드를 사용하여 정의하며, 인터페이스와 달리 객체 타입뿐만 아니라
- 원시 타입, 유니온 타입, 튜플, 함수 시그니처 등 거의 모든 TypeScript 타입에 별칭을 부여할 수 있음

- 모든 타입에 적용 가능
- 복잡한 타입 단순호하
- 타입 조합
- 선언적 병합 불가
*/

// 1. 원시 타입에 별칭을 부여
type Age = number; // number 타입에 'Age'라는 별칭을 부여합니다.
type UserName = string; // string 타입에 'UserName'이라는 별칭을 부여합니다.

const userAge: Age = 30; // Age 별칭을 사용하여 변수를 선언하고 숫자를 할당합니다.
const greetingName: UserName = "TypeScript"; // UserName 별칭을 사용하여 변수를 선언하고 문자열을 할당합니다.

// 백틱(``)을 사용한 템플릿 리터럴로 문자열을 조합하여 콘솔에 출력합니다.
console.log(`${greetingName}의 나이: ${userAge}`);

// 2. 유니온 타입에 별칭 부여
// 'success' 또는 'failure' 문자열 리터럴만 가능한 유니온 타입 별칭
type ResultStatus = "success" | "failure";

// number 또는 string 타입만 가능한 유니온 타입 별칭
type IdOrName = number | string;

// 처리 상태를 콘솔에 출력하는 함수입니다.
function showStatus(status: ResultStatus): void {
  console.log(`처리 상태: ${status}`);
}

// ResultStatus 타입에 맞는 'success' 문자열을 전달하여 함수를 호출합니다.
showStatus("success");

// 3. 객체 타입에 별칭 부여(인터페이스와 유사)
// x와 y 속성을 가지는 객체 타입에 'Coords'라는 별칭을 부여합니다.
type Coords = {
  x: number;
  y: number;
};

// Coords 타입에 맞는 객체를 생성하고 'point' 변수에 할당합니다.
const point: Coords = { x: 10, y: 20 };

// point 객체의 x, y 속성에 접근하여 콘솔에 출력합니다.
console.log(`좌표: (${point.x}, ${point.y})`);

// 4. 함수 시그니처에 별칭 부여
// (name: string)을 받아 string을 반환하는 함수 타입에 'GreetFunction'이라는 별칭을 부여합니다.
type GreetFunction = (name: string) => string;

// GreetFunction 타입에 맞는 화살표 함수를 생성하고 'sayHello' 변수에 할당합니다.
const sayHello: GreetFunction = (name) => `Hello, ${name}!`;

// sayHello 함수를 호출하고 그 결과를 콘솔에 출력합니다.
// "Hello, 홍길동!"이 출력될 것입니다.
console.log(sayHello("홍길동"));

// 5. 타입 조합
// 기본적인 사람 정보를 나타내는 객체 타입 별칭
type PersonInfo = {
  name: string;
  age: number;
};

// PersonInfo 타입을 확장하여 직원 정보를 추가하는 객체 타입 별칭
// '&' 기호를 사용하여 PersonInfo의 모든 속성과 새로 정의한 속성들을 조합합니다.
type EmployeeInfo = PersonInfo & {
  employeeId: string;
  department: string;
};

// EmployeeInfo 타입에 맞는 객체를 생성하고 'employee' 변수에 할당합니다.
// PersonInfo의 속성(name, age)과 EmployeeInfo의 추가 속성(employeeId, department)을 모두 포함해야 합니다.
const employee: EmployeeInfo = {
  name: "김영희",
  age: 28,
  employeeId: "EMP-001",
  department: "개발",
};

// employee 객체의 모든 속성을 콘솔에 출력합니다.
console.log(employee);
