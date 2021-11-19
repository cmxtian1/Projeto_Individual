
/* para workbench - local - desenvolvimento */
create database Social;

use social;

create table academia (
idAcademia int primary key auto_increment,
nomeAcademia varchar(45),
Estado varchar(45), 
Municipio varchar(45), 
cep char(8)
); 

create table atleta (
idAtleta int primary key auto_increment,
nomeAtleta varchar(45),
graduacao varchar(45),
dtNasc date,
email varchar(45),
senha varchar(100),
telefone varchar(45),
academia int,
foreign key (academia) references academia(idacademia)
)auto_increment=1000;
