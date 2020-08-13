设计模式 学习项目  
  
学习笔记：  
****
一、 面向对象  
  
1、面向对象三要素： 继承  封装  多态  
  
继承： 
        子类继承父类  把公用的要素放在父类，剥离开来  
  
封装：   隐藏细节信息不对外暴露  
        三个关键字 ：  private 自己的类里使用    
        public 无隐私公用   
        protected 自己与子类享用  
          
        1.减少耦合  
          
        2.es6 目前不支持 只能TS  下划线 _ 开头的一般都是private属性  
  
多态： 接口的不同实现  
  
2.面向对象的意义    为了是数据结构化 ，便于计算机处理  
****
二、UML 类图  

UML   --->   unified modeling language   统一建模语言  


1.泛化   表示继承  UML类图中使用空心箭头指向父类  

"+" 表示是public类型  
"-" 表示是private类型  
"#" 表示是protected类型  


2.关联   表示引用  UML类图中使用实心箭头  


****
三、设计原则  
  
  
来源于 《UNIX/LINUX设计哲学》  
  
  
1.小即是美  
  
2.让每个程序只做好一件事  
  
3.快速建立原型（快速搭建出可用的原型先给用户使用，得到反馈继续搭建）  
  
4.舍弃高效率而选择通用可移植性（未来硬件因素可以抹平舍弃高效率的劣势）  
  
5.采用纯文本存储数据 （可读性最重要，而不是用二进制存储提高效率）
  
6.充分利用软件的杠杆效应 （代码复用） 
  
7.使用shell脚本提高软件杠杆效应和可移植性  
  
8.避免强制性的用户界面 （图像化界面）  
  
9.让每个程序都能称为过滤器 跟第二点一致  
  
小准则  
  * 允许用户定制环境  
  
  * 尽量使操作系统内核小和轻量化  
  
  * 沉默是金  
    
  * 各部分之和大于整体  
    
  * 寻求90%解决方案  （90%满足需求的人即可）  
  

  五大设计原则 S O L I D
  
    
S - 单一职责原则  (simple)  
  
  * 一个程序制作好一件事  
  * 如果功能过于复杂就拆分，每个部分保持独立  
O - 开放封闭原则  (open)  
  * 对扩展开放，对修改封闭  
  *  增加需求时，扩展新代码，而非修改已有代码  
  * 这是软件设计的终极目标  
    
L - 李氏置换原则  (Liskov Substitution Principle)  
  * 子类能覆盖父类  
  * 父类能出现的地方子类就能出现  
  * JS中使用较少（因为JS弱类型 & 继承使用较少）  

I - 接口独立原则  (interface)  
  * 保持接口的独立单一，避免出现“胖接口”  
  * JS中没有接口，TS除外 使用较少  
  * 类似于单一职责原则，这里更关注接口  

D - 依赖导致原则  (dependence)  
  * 面向接口编程，依赖于抽象而不依赖于具体  
  * 使用方只关注接口而不关注具体类的实现  
  * JS中使用较少  
  
  用Promise来说明 S O  
  * 单一职责原则： 每个then中的逻辑只做好一件事  
  * 开放封闭原则： 如果新增需求，扩展then  (对扩展开放，对修改关闭)  