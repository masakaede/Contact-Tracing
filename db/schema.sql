
-- Use the following 3 lines to create database on workbench
drop database if exists contact_tracing_db;
create database contact_tracing_db;
use contact_tracing_db;



-- This following for Test purpose only , we will be using Routes and Sequelize


-- Visitor Table
create table visitor (
id int auto_increment,
first_name varchar(100) not null,
last_name varchar(100) not null,
email varchar(150) not null,
mobile varchar(11) not null,
post_code int not null,
checkin_time datetime not null,
checkout_time datetime,
primary key(id)
);

-- Shop_login Table
create table shop_login (
id int auto_increment,
shop_name varchar(100) not null,
password text not null,
primary key(id)
);
