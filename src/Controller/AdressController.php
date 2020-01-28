<?php

namespace App\Controller;

use App\Entity\Address;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdressController extends AbstractController
{
    /**
     * @Route("/adress", name="adress")
     */
    public function index()
    {
        return $this->render('adress/index.html.twig', [
            'controller_name' => 'AdressController',
        ]);
    }
}
