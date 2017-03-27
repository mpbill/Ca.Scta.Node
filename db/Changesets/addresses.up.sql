create table `addresses` (
    id int not null auto_increment,
    street1 varchar(100) not null,
    street2 varchar(100) null,
    street3 varchar(100) null,
    zipCode varchar(5) null,
    city varchar(50) not null,
    state varchar(2) not null,
	`name` varchar(100) not null,
    primary key (id)
);

