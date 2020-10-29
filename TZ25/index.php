<?php
    $arr1 = [1,2,3,4];
    $arr2 = [
        'a' => 5,
        'b' => TRUE,
        'c' => []
    ];

    array_push($arr1, 54);
    $del = array_pop($arr2);

    $farr1 = $arr1[1];
    $sv = $arr2['c'];
    $strArr = 'q,w,e,r,t,y';
    $arr3 = explode(',', $strArr);
    $ia = is_array($arr3);
    $empty_arr = [];
    $f= false;
    $copy_arr3 = $arr3;


    $keys = ['a', 'b', 5];
    $values = [[], 57, true];
    $assoc_arr = array_combine($keys, $values);
    $added_arr = array_merge($keys, $values);

    $ar = [
        ["10", 11, 100, 100, "a"],
        [1, 2, "2", 3, 1]
    ];
    array_multisort(
        $ar[0], SORT_ASC, SORT_STRING,
        $ar[1], SORT_NUMERIC, SORT_DESC
    );

    
    $fruits = array("d" => "lemon", "a" => "orange", "b" => "banana", "c" => "apple");

    function test_alter(&$item1, $key, $prefix) {
        $item1 = "$prefix: $item1";
    }

    function test_print($item2, $key) {
        echo "$key. $item2<br />\n";
    }

    array_walk($fruits, 'test_print');
    array_walk($fruits, 'test_alter', 'fruit');
    array_walk($fruits, 'test_print');


    $i = 1;
    while ($i <= 10) {
        echo $i++;
    }
    $i = 10;
    do {
        echo $i--;
    } while ($i > 0);

    for ($i = 0; $i < count($values); ++$i)
        if (is_array($values[$i]))
            break;
        elseif ($values[$i])
            continue;
        else
            echo $values[$i];
    $ind = 1;
    foreach ($assoc_arr as $key => &$value) {
        if ($ind == 1) {
            echo '1st';
            $value = 'imafirst';
        }
        if ($ind == count($assoc_arr))
            echo 'last';
        echo $key . ' - ' . $value;
        $ind++;
    }

    function hiUser($name) {
        return 'Privet, ' . $name;
    }

    class Person {
        public $name;
        public $lastname;
        public $city;

        private $age;
        private $children;

        public function setAge($age) {
            $this->age = $age;
        }
        public function setChildren($children) {
            $this->children = $children;
        }
        public function getAge() {
            return $this->age;
        }
        public function getChildren() {
            return $this->children;
        }

        public function __construct($name, $lastName, $city, $age, $children) {
            $this->name = $name;
            $this->lastName = $lastName;
            $this->city = $city;
            $this->age = $age;
            $this->children = $children;
        }
    }
    class User extends Person {
        private $email;
        private $phone;
        public function setContacts($email, $phone) {
            $this->email = $email;
            $this->phone = $phone;
        }
        public function getContacts() {
            return [$this->email, $this->phone];
        }
    }

    $vanya = new Person("Иван", "Петров", "Москва", 32, 2);
    $vanya->getAge(33);
    $vanya->city = 'Санкт-Петербург';

?>