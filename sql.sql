create table users
(
    customer_id   int auto_increment
        primary key,
    customer_name varchar(255)                             not null,
    email         varchar(255)                             not null,
    phone         varchar(255)                             not null,
    address       varchar(255)                             not null,
    city          varchar(255)                             not null,
    created_at    datetime(6) default CURRENT_TIMESTAMP(6) not null,
    updated_at    datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    constraint IDX_97672ac88f789774dd47f7c8be
        unique (email),
    constraint customer_unique_constraint
        unique (email)
);

create table vehicles
(
    vehicle_id    int auto_increment
        primary key,
    vin           varchar(255)                             not null,
    license_plate varchar(255)                             not null,
    brand         varchar(255)                             not null,
    model         varchar(255)                             not null,
    year          varchar(255)                             not null,
    fuel_type     varchar(255)                             not null,
    power         int                                      not null,
    created_at    datetime(6) default CURRENT_TIMESTAMP(6) not null,
    updated_at    datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    constraint IDX_7e9fab2e8625b63613f67bd706
        unique (license_plate),
    constraint IDX_8288ce015b69c5856cf54e07a6
        unique (vin),
    constraint vehicles_unique_constraint
        unique (vin, license_plate)
);

create table contracts
(
    contract_id   int auto_increment
        primary key,
    start_date    datetime                                 not null,
    end_date      datetime                                 not null,
    duration      int                                      not null,
    distance      int                                      not null,
    total_price   int                                      not null,
    price_month   int                                      not null,
    odometer      int                                      not null,
    start_mileage int                                      not null,
    created_at    datetime(6) default CURRENT_TIMESTAMP(6) not null,
    updated_at    datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    customer_id   int                                      null,
    vehicle_id    int                                      null,
    constraint FK_2e66f7950711366031e3200413d
        foreign key (customer_id) references users (customer_id),
    constraint FK_e6411f826c82d088e03df826791
        foreign key (vehicle_id) references vehicles (vehicle_id)
);

create table events
(
    event_id    int auto_increment
        primary key,
    event_date  datetime                                 not null,
    event_type  varchar(255)                             not null,
    comment     varchar(255)                             not null,
    created_at  datetime(6) default CURRENT_TIMESTAMP(6) not null,
    updated_at  datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    contract_id int                                      null,
    constraint FK_aef1b28586686ab9b1e48fd076a
        foreign key (contract_id) references contracts (contract_id)
);


