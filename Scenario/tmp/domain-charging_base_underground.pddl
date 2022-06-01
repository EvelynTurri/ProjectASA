;; domain file: domain-charging_base_underground.pddl
(define (domain charging_base_underground)
    (:requirements :strips)
    (:predicates
        (charger_base ?obj)
        (vaccum ?v)
        (out ?v ?obj)
        (in ?v ?obj)              
    )
    
        (:action inChargerBase
            :parameters (?obj ?v)
            :precondition (and
                (charger_base ?obj)
                (vaccum ?v)
                (out ?v ?obj)
            )
            :effect (and
                (in ?v ?obj)
            )
        )
        
        (:action outChargerBase
            :parameters (?obj ?v)
            :precondition (and
                (charger_base ?obj)
                (vaccum ?v)
                (in ?v ?obj)
            )
            :effect (and
                (out ?v ?obj)
            )
        )
)