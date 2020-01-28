<?php

namespace App\Repository;

use App\Entity\Kart;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Kart|null find($id, $lockMode = null, $lockVersion = null)
 * @method Kart|null findOneBy(array $criteria, array $orderBy = null)
 * @method Kart[]    findAll()
 * @method Kart[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KartRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Kart::class);
    }

    // /**
    //  * @return Kart[] Returns an array of Kart objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('k.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Kart
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
