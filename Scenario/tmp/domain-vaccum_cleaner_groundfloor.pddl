;; domain file: domain-vaccum_cleaner_groundfloor.pddl
(define (domain vaccum_cleaner_groundfloor)
    (:requirements :strips)
    (:predicates
        (vaccum ?obj)
        (room ?before)
        (adj ?before ?after)
        (in_room ?obj ?before)
        (clean ?obj ?before)
        (switched_on ?obj)
        (not_in_base ?obj)
        (state ?status)
        (set_status ?obj ?status)
        (switched_off ?obj)
        (in_base ?obj)
        (room1 ?r1)
        (room2 ?r2)
        (room3 ?r3)
        (room4 ?r4)
        (room5 ?r5)
        (room6 ?r6)
        (clean_all_groundfloor ?obj)
        (clean_ground_floor ?obj)              
    )
    
        (:action Move
            :parameters (?obj ?before ?after)
            :precondition (and
                (vaccum ?obj)
                (room ?before)
                (room ?after)
                (adj ?before ?after)
                (in_room ?obj ?before)
                (adj ?after ?before)
                (clean ?obj ?before)
                (switched_on ?obj)
                (not_in_base ?obj)
            )
            :effect (and
                (in_room ?obj ?after)
                (not (in_room ?obj ?before))
            )
        )
        
        (:action Switch
            :parameters (?obj ?status)
            :precondition (and
                (vaccum ?obj)
                (state ?status)
            )
            :effect (and
                (set_status ?obj ?status)
            )
        )
        
        (:action Clean
            :parameters (?obj ?r)
            :precondition (and
                (vaccum ?obj)
                (room ?r)
                (in_room ?obj ?r)
                (switched_on ?obj)
                (not_in_base ?obj)
            )
            :effect (and
                (clean ?obj ?r)
            )
        )
        
        (:action SwitchOn
            :parameters (?obj)
            :precondition (and
                (vaccum ?obj)
                (switched_off ?obj)
            )
            :effect (and
                (switched_on ?obj)
            )
        )
        
        (:action LeaveChargerBase
            :parameters (?obj)
            :precondition (and
                (vaccum ?obj)
                (switched_on ?obj)
                (in_base ?obj)
            )
            :effect (and
                (not_in_base ?obj)
            )
        )
        
        (:action CleanAllRoomsGround
            :parameters (?obj ?r1 ?r2 ?r3 ?r4 ?r5 ?r6)
            :precondition (and
                (vaccum ?obj)
                (room1 ?r1)
                (room2 ?r2)
                (room3 ?r3)
                (room4 ?r4)
                (room5 ?r5)
                (room6 ?r6)
                (clean ?obj ?r1)
                (clean ?obj ?r2)
                (clean ?obj ?r3)
                (clean ?obj ?r4)
                (clean ?obj ?r5)
                (clean ?obj ?r6)
            )
            :effect (and
                (clean_all_groundfloor ?obj)
            )
        )
        
        (:action ReturnChargerBase
            :parameters (?obj)
            :precondition (and
                (vaccum ?obj)
                (not_in_base ?obj)
            )
            :effect (and
                (in_base ?obj)
            )
        )
        
        (:action SwitchOff
            :parameters (?obj)
            :precondition (and
                (vaccum ?obj)
                (in_base ?obj)
            )
            :effect (and
                (switched_off ?obj)
            )
        )
        
        (:action CleanGroundFloor
            :parameters (?obj)
            :precondition (and
                (vaccum ?obj)
                (clean_all_groundfloor ?obj)
            )
            :effect (and
                (clean_ground_floor ?obj)
            )
        )
)