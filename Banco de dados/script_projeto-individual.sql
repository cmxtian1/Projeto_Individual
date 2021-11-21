
create database Social;

use social;

create table atleta (
idAtleta int primary key auto_increment,
nomeAtleta varchar(45),
graduacao varchar(45),
dtNasc date,
email varchar(45),
senha varchar(45),
telefone varchar(45)
)auto_increment=1000;

alter table atleta modify column senha varchar(100);

create table academia (
idAcademia int primary key auto_increment,
nomeAcademia varchar(45),
Estado varchar(45), 
Municipio varchar(45)
);

alter table academia add column CEP char(8);


insert into academia (nomeAcademia, estado, municipio, cep) values
	('Inova', 'São Paulo', 'Santo André', 09111340),
    ('Tiger Thai', 'São Paulo','São Bernardo do campo', 09692100),
    ('Team Nogueira', 'São Paulo', 'Santo André', 09080-510),
    ('Nocaute', 'Rio de Janeiro', 'Duque de caxias', 25075015),
    ('Thai Fighters', 'Minas Gerais', 'Muriaê', 36880000),
    ('Thai Combat', 'Bahia','Salvador', 41770445),
    ('Thai Brasil', 'Paraná', 'Curitiba', 80050-370);
    
    select * from academia;
    select * from atleta;
    
alter table atleta add column academia int, add foreign key (academia) references academia(idacademia);

create table feed(
idFeed int primary key auto_increment,
descricao varchar(300),
fkatleta int,
foreign key (fkatleta) references atleta(idatleta)
)auto_increment=3000;

select * from feed;

select idAtleta, nomeAtleta, graduacao, descricao from feed join atleta on fkatleta = idatleta;