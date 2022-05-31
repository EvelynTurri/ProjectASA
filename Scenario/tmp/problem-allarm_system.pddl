;; problem file: problem-allarm_system.pddl
(define (problem allarm_system)
    (:domain allarm_system)
    (:objects house_security_system)
	(:init (security_system house_security_system) (deactivate house_security_system))
	(:goal (and (activate house_security_system)))
)
