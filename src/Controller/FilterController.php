<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Products;

class FilterController extends AbstractController
{
    /**
     * @Route("/filter/{id}", name="filter")
     */
    public function filter($id)
    {
        $repository = $this->getDoctrine()->getRepository(Products::class);
        $categories = $repository->findBy(['categorie' => $id]);
    }
}
