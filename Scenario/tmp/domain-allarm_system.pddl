;; domain file: domain-allarm_system.pddl
(define (domain allarm_system)
    (:requirements :strips)
    (:predicates
        (security_system ?obj)
        (deactivate ?obj)
        (activate ?obj)              
    )
    
        (:action Activate
            :parameters (?obj)
            :precondition (and
                (security_system ?obj)
                (deactivate ?obj)
            )
            :effect (and
                (activate ?obj)
            )
        )
        
        (:action Deactivate
            :parameters (?obj)
            :precondition (and
                (security_system ?obj)
                (activate ?obj)
            )
            :effect (and
                (deactivate ?obj)
            )
        )
)